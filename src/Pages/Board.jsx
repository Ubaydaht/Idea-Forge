import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './General.css'

const Board = () => {
  const { id } = useParams();
  
   const [idea, setIdea] = useState({});
     const fetchIdea = async () => {
    try {
      const res = await axios.get(
        `https://forgeidea-vp95.onrender.com/ideas/${id}`,
      );
      setIdea(res.data.idea);
    } catch (err) {
      console.log(err);
    }
  };


  const [showModal, setShowModal] = useState(false);
const [taskTitle, setTaskTitle] = useState('');
const [taskDescription, setTaskDescription] = useState('');
const [tasks, setTasks] = useState([]);
const [draggedTask, setDraggedTask] = useState(null);


const saveTask = async () => {

  try {

    const res = await axios.post(
      `https://forgeidea-vp95.onrender.com/board/tasks`,
      {
        idea: id,
        title: taskTitle,
        description: taskDescription
      }
    );

    setTasks((prev) => [res.data, ...prev]);

    setTaskTitle('');
    setTaskDescription('');
    setShowModal(false);

  } catch (err) {
    console.log(err);
  }

};


const fetchTasks = async () => {

  try {

    const res = await axios.get(
      `https://forgeidea-vp95.onrender.com/tasks/${id}`
    );

    setTasks(res.data);

  } catch (err) {
    console.log(err);
  }

};

useEffect(() => {
  fetchIdea();
  fetchTasks();
}, [id]);


const deleteTask = async (taskId) => {
  try {
    await axios.delete(
      `https://forgeidea-vp95.onrender.com/tasks/${taskId}`
    );

    // remove from UI immediately
    setTasks((prev) => prev.filter(task => task._id !== taskId));

  } catch (err) {
    console.log(err);
  }
};

const moveTask = async (status) => {

  if (!draggedTask) return;

  try {

    await axios.put(
      `https://forgeidea-vp95.onrender.com/tasks/status/${draggedTask._id}`,
      { status }
    );

    // update UI instantly
    setTasks((prev) =>
      prev.map((task) =>
        task._id === draggedTask._id
          ? { ...task, status }
          : task
      )
    );

    setDraggedTask(null);

  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <DashboardNav />

      <div style={{ padding: "20px" }}>
        <h2>Collaboration Board</h2>
        <p> {idea.title}</p>

        <span>
          {idea.shortDescription}
        </span>
        <section className='d-md-flex justify-content-between pt-4'>
          <div className='toCard'  onDragOver={(e) => e.preventDefault()}
  onDrop={() => moveTask("todo")}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={{color:'#003D9B'}}>To Do</h5>
              <img src="/more.svg" alt="" />
            </div>
            {tasks.filter(t => t.status === "todo")
    .map(task => (
      <div
        key={task._id}
        draggable
        onDragStart={() => setDraggedTask(task)}
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
          cursor: "grab"
        }}
  >
    <div>
      <h6>{task.title}</h6>
      <p>{task.description}</p>
    </div>
    <img src="/delete.svg" alt=""   style={{ width: "15px", cursor: "pointer" }}
  onClick={() => deleteTask(task._id)} />

  </div>

))}
            <button className='btn border w-100 d-flex align-items-center justify-content-center rounded-pill mt-3' style={{backgroundColor:'#68FADD'}}
            onClick={() => setShowModal(true)}>
              <img src="/add.svg" alt="" />
              Add Task
            </button>
            {
  showModal && (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px"
        }}
      >
        <h3>Add Task</h3>

        <input
          type="text"
          placeholder="Task title"
          className="form-control my-2"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />

        <textarea
          placeholder="Task description"
          className="form-control my-2"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <div className="d-flex gap-2 mt-3">
          <button
            className="btn btn-secondary w-50"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>

          <button className="btn btn-primary w-50" onClick={saveTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
          </div>
          <div className='toCard'  onDragOver={(e) => e.preventDefault()}
  onDrop={() => moveTask("progress")}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={{color:'#003D9B'}}>In Progress</h5>
              <img src="/more.svg" alt="" />
            </div>
            {tasks
  .filter(t => t.status === "progress")
  .map(task => (

    <div
      key={task._id}
      draggable
      onDragStart={() => setDraggedTask(task)}
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "10px",
        cursor: "grab"
      }}
      className='d-flex justify-content-between align-items-center'
    >

      <div>
        <h6>{task.title}</h6>
        <p>{task.description}</p>
      </div>

      <img
        src="/delete.svg"
        alt=""
        style={{
          width: "15px",
          cursor: "pointer"
        }}
        onClick={() => deleteTask(task._id)}
      />

    </div>

))}
           
          </div>
          <div className='toCard'  onDragOver={(e) => e.preventDefault()}
  onDrop={() => moveTask("done")}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 style={{color:'#003D9B'}}>Done</h5>
              <img src="/more.svg" alt="" />
            </div>
           {tasks
  .filter(t => t.status === "done")
  .map(task => (

    <div
      key={task._id}
      draggable
      onDragStart={() => setDraggedTask(task)}
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "10px",
        cursor: "grab"
      }}
      className='d-flex justify-content-between align-items-center'
    >

      <div>
        <h6>{task.title}</h6>
        <p>{task.description}</p>
      </div>

      <img
        src="/delete.svg"
        alt=""
        style={{
          width: "15px",
          cursor: "pointer"
        }}
        onClick={() => deleteTask(task._id)}
      />

    </div>

))}
            
          </div>
        </section>

      </div>
    </>
  )
}

export default Board