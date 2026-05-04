import React, { useEffect, useState } from 'react'
import DashboardNav from '../components/DashboardNav'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Board = () => {

  const { ideaId } = useParams();

  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios.get(`http://localhost:2131/board/${ideaId}`)
      .then((res) => {
        setBoard(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });

  }, [ideaId]);

  if (loading) {
    return <h2>Loading board...</h2>
  }

  if (!board) {
    return <h2>No board found</h2>
  }

  return (
    <>
      <DashboardNav />

      <div style={{ padding: "20px" }}>
        <h2>Collaboration Board</h2>
        <p>System Architecture</p>

        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eum.
        </span>

        <div className="board" style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

          {board.columns?.map((column, index) => (

            <div
              className="column"
              key={index}
              style={{
                minWidth: "250px",
                background: "#f4f4f4",
                padding: "10px",
                borderRadius: "8px"
              }}
            >

              <h3>{column.title}</h3>

              {column.tasks?.length === 0 && (
                <p style={{ fontSize: "12px", color: "gray" }}>No tasks</p>
              )}

              {column.tasks?.map((task) => (

                <div
                  className="task-card"
                  key={task._id}
                  style={{
                    background: "white",
                    padding: "8px",
                    margin: "8px 0",
                    borderRadius: "6px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
                  }}
                >
                  <h4>{task.title}</h4>
                  <p style={{ fontSize: "12px" }}>{task.description}</p>
                </div>

              ))}

            </div>

          ))}

        </div>
      </div>
    </>
  )
}

export default Board