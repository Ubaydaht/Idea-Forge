import React from "react";
import DashboardNav from "../components/DashboardNav";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashhboard = () => {
  let navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        let token = localStorage.token;
        const res = await axios.get(
          "https://forgeidea-vp95.onrender.com/ideas",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );
        setIdeas(res.data.ideas);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        console.error("Error fetching ideas:", error);
      }
    };

    fetchIdeas();
  }, [navigate]);

 

 const handleUpvote = async (ideaId) => {
  const user = JSON.parse(localStorage.getItem("user"));

  try {
    await axios.put(
      "https://forgeidea-vp95.onrender.com/ideas/upvote",
      {
        ideaId,
        userId: user.id,
      }
    );

    // refresh ideas after upvote
    const token = localStorage.token;

    const res = await axios.get(
      "https://forgeidea-vp95.onrender.com/ideas",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setIdeas(res.data.ideas);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <DashboardNav />
      <h1 className="p-3" style={{ fontSize: "40px", color: "#0f0f1e" }}>
        Discovery Feed
      </h1>
      <div className="d-md-flex justify-content-between px-3">
        <p>
          Explore architectural thoughts and digital seeds from our global{" "}
          <br /> community. Collaborate on the next breakthrough.
        </p>
        <input
          style={{ height: "40px", width: "300px", border: "2px solid #ccc" }}
          className="ps-2 rounded-pill"
          type="text"
          placeholder="Search ideas, tags or creators"
        />
      </div>
      <div className="d-flex justify-content-between p-3">
        <div className="d-flex gap-3">
          <button
            className="rounded-pill border border-none text-white fw-medium"
            style={{ backgroundColor: "#0f0f1e", fontSize: "12px" }}
          >
            Trending
          </button>
          <button
            className="rounded-pill border border-none text-white fw-medium"
            style={{ backgroundColor: "#013c958c", fontSize: "12px" }}
          >
            New
          </button>
        </div>
        <div>
          <button
            className="rounded-pill border border-none text-white fw-medium"
            style={{ backgroundColor: "#013c958c", fontSize: "12px" }}
          >
            Filter
          </button>
        </div>
      </div>

      {/* first row */}
      <section className="d-md-flex  w-100 gap-4 p-3 flexx">
        <div
          className="cardd d-flex rounded-3"
          style={{ boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)" }}
        >
          <img
            src="/featured.jpg"
            alt=""
            className="w-50 image "
            style={{
              height: "300px",
              borderTopLeftRadius: "0.5rem",
              borderBottomLeftRadius: "0.5rem",
            }}
          />
          <div className=" w-50 ps-3 pt-3 mb-3">
            <div className="d-flex gap-3">
              <img
                src="/idea.jpg"
                alt=""
                width={"30px"}
                className="rounded-circle"
              />
              <span className="fw-bold">Ubaydah Olasunkanmi</span>
            </div>
            <h5 className="py-2" style={{color:'#003D9B'}}>
              Testing Vulnerability in Cybersecurity space
            </h5>
            <p
              className="pe-4"
              style={{ fontSize: "12px", textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse
              atque a suscipit nesciunt quam voluptatibus quo vel, dicta
              deleniti, alias quis recusandae rerum necessitatibus in, sapiente
              ea fuga explicabo?
            </p>

            <div className="d-flex gap-3 pb-3">
              <span
                className=" p-1 rounded-pill"
                style={{ fontSize: "10px", backgroundColor:'#ccc' }}
              >
                #Internet of Things
              </span>
              <span
                className="p-1 rounded-pill"
                style={{ fontSize: "10px", backgroundColor:'#ccc' }}
              >
                #Research
              </span>
            </div>
            <button
              className="btn btn-dark d-flex align-items-center justify-content-center rounded-pill "
              style={{ fontSize: "12px", width: "95%", backgroundColor:'#68FADD', border:'none' }}
            >
              <img src="/upvote.svg" alt=""  width={"10px"}/>
              <span className="text-dark ps-2 ">Upvote</span>
            </button>
          </div>
        </div>
        <div
          className="card ps-3 pt-3 rounded-3  text-light"
          style={{
            width: "32%",
            height: "300px",
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
            backgroundColor: "#003D9B",
          }}
        >
          <h1>Get an idea</h1>
          <p className="fs-5">
            Have a seed of an idea? Launch it now and find your collective.
          </p>
          <button
            className="btn btn-light d-flex align-items-center justify-content-center rounded-pill my-4"
            style={{ fontSize: "12px", width: "95%" }}
          >
            <img src="" alt="" /> Create New Seed
          </button>
        </div>
      </section>

      <Link to="/newidea">
        <button
          className="d-flex align-items-center justify-content-center rounded-circle  text-light border border-none"
          style={{
            position: "fixed",
            bottom: "10px",
            right: "10px",
            width: "50px",
            height: "50px",
            backgroundColor: "#003D9B",
            zIndex: "1000",
          }}
        >
          +
        </button>
      </Link>

      <section className="d-md-flex p-3 justify-content-between" style={{flexWrap: 'wrap'}}>
        {ideas.map((idea) => (
          
            <div
              key={idea._id}
              className="p-3 mb-3 rounded-3 card"
              style={{
                width: "49%",
                height: "auto",
                boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="d-flex gap-3">
                <img
                  src="/idea.jpg"
                  alt=""
                  width={"30px"}
                  className="rounded-circle"
                />
                <span style={{color:'#0f0f1e', fontWeight:'bolder'}}>
                  {idea.createdBy?.firstname} {idea.createdBy?.lastname}
                </span>
              </div>
              <h5 className="py-2" style={{color:'#003D9B'}}>{idea.title}</h5>
              <p style={{ fontSize: "12px" }}>{idea.shortDescription} <Link
            key={idea._id}
            to={`/idea/${idea._id}`}
            style={{fontStyle:'oblique'}}
          >read more...</Link></p>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <span className="p-1 rounded-pill d-flex align-items-center justify-content-center"
                style={{ fontSize: "10px", backgroundColor:'#ccc' }}>#{idea.tag1}</span>
                  <span className="p-1 rounded-pill  d-flex align-items-center justify-content-center"
                style={{ fontSize: "10px", backgroundColor:'#ccc' }}>#{idea.tag2}</span>
                </div>
                <button className="btn btn-light d-flex align-items-center justify-content-center rounded-pill"
                  style={{ fontSize: "12px", backgroundColor:'#68FADD' }}  onClick={() => handleUpvote(idea._id)}>
                  <img src="/upvote.svg" alt="" width={'10px'}/>
                  <span>{idea.upvotes?.length || 0}</span>
                </button>
              </div>
            </div>
        ))}
      </section>

     
    </>
  );
};

export default Dashhboard;
