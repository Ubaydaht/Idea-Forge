import React, { useEffect, useState } from "react";
import DashboardNav from "../components/DashboardNav";
import "./IdeaDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { BottomNav } from "../components/BottomNav";

const IdeaDetail = () => {
  const { id } = useParams();

  const [idea, setIdea] = useState(null);
  const [comment, setComment] = useState("");

//  idea fetching 
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

  useEffect(() => {
    fetchIdea();
  }, [id]);

//  upvote 
  const handleUpvote = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      await axios.put("https://forgeidea-vp95.onrender.com/ideas/upvote", {
        ideaId: id,
        userId: user.id,
      });

      // refresh only this idea
      fetchIdea();
    } catch (err) {
      console.log(err);
    }
  };

//  comment 
  const handleComment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      await axios.put("https://forgeidea-vp95.onrender.com/ideas/comment", {
        ideaId: id,
        userId: user.id,
        text: comment,
      });

      setComment("");
      fetchIdea();
    } catch (err) {
      console.log(err);
    }
  };

//  loading state 
  if (!idea) return <div className="d-flex justify-content-center align-items-center bg-light text-primary" style={{height: '100vh'}}>Loading...</div>;

 
  return (
    <>
      <DashboardNav />
    
      <section className="d-md-flex justify-content-between gap-3 detail">
        {/* LEFT SIDE */}
        <div className="left">
          <div className=" top d-flex justify-content-between">
            <span className="rounded-pill bg-dark text-light px-2">
              {idea.category}
            </span>
            <span>
              Posted by: {idea.createdBy?.firstname} {idea.createdBy?.lastname}
            </span>
          </div>

          <h2 className="py-3">{idea.title}</h2>

          <img
            src="/featured.jpg"
            alt="Featured"
            className="rounded-3"
            width="100%"
          />

          <p className="py-4">{idea.fullIdeaDetails}</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right">
          <Link to={`/board/${idea._id}`}>
            <button
            className="btn w-100 text-light rounded-pill"
            style={{ backgroundColor: "#003D9B" }}
          >
            Join Team & Collaborate
          </button>
          </Link>
          

          <button
            className="btn w-100 d-flex alighn-items-center justify-content-center  text-light rounded-pill mt-2"
            style={{ backgroundColor: "#68FADD" }}
            onClick={handleUpvote}
          >
            <img src="/upvot.svg" alt="" />
            Upvote Idea {idea.upvotes?.length || 0}
          </button>

          {/* REQUIRED ROLES */}
          <p className="pt-3">REQUIRED ROLES</p>

          <div className="d-flex flex-column gap-2">
            {[
              idea.requiredRole1,
              idea.requiredRole2,
              idea.requiredRole3,
              idea.requiredRole4,
            ]
              .filter((r) => r && r.trim() !== "")
              .map((role, i) => (
                <span
                  key={i}
                  className="rounded-pill bg-dark text-light px-2 d-block"
                >
                  {role}
                </span>
              ))}
          </div>

          {/* COMMENTS */}
          <p className="pt-3">COMMENTS</p>

          <textarea
            className="w-100"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            style={{
              backgroundColor: "#cccccc8c",
              border: "none",
              padding: "10px",
              borderRadius: "10px",
            }}
          />

          <button
            className="btn bg-dark text-light w-100"
            onClick={handleComment}
          >
            Post Comment
          </button>

          {/* COMMENT LIST */}
          {idea.comments?.map((c, index) => (
            <div
              key={index}
              className=" p-2 mt-2 border rounded-3 text-light"
              style={{ backgroundColor: "#003D9B" }}
            >
              <div className="d-flex gap-3">
                <img
                  src={c.user?.image}
                  alt=""
                  width={"30px"} height={'30px'}
                  className="rounded-circle"
                />
                <b>
                  {c.user?.firstname} {c.user?.lastname}
                </b>
              </div>

              <p className="ps-5">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
      <BottomNav />
    </>
  );
};

export default IdeaDetail;
