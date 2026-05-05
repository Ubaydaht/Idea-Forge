import React, { useEffect, useState } from 'react';
import DashboardNav from '../components/DashboardNav';
import './IdeaDetail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const IdeaDetail = () => {

    const { id } = useParams();

    const [idea, setIdea] = useState(null);
    const [comment, setComment] = useState("");

    // ========================
    // FETCH SINGLE IDEA
    // ========================
    const fetchIdea = async () => {
        try {
            const res = await axios.get(`https://forgeidea-vp95.onrender.com/ideas/${id}`);
            setIdea(res.data.idea);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchIdea();
    }, [id]);

    // ========================
    // UPVOTE / UNVOTE
    // ========================
    const handleUpvote = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        try {
            await axios.put("https://forgeidea-vp95.onrender.com/ideas/upvote", {
                ideaId: id,
                userId: user.id
            });

            // refresh only this idea
            fetchIdea();

        } catch (err) {
            console.log(err);
        }
    };

    // ========================
    // ADD COMMENT
    // ========================
    const handleComment = async () => {

        const user = JSON.parse(localStorage.getItem("user"));

        try {
            await axios.put("https://forgeidea-vp95.onrender.com/ideas/comment", {
                ideaId: id,
                userId: user.id,
                text: comment
            });

            setComment("");
            fetchIdea();

        } catch (err) {
            console.log(err);
        }
    };

    // ========================
    // LOADING STATE
    // ========================
    if (!idea) return <h2>Loading...</h2>;

    // ========================
    // UI
    // ========================
    return (
        <>
            <DashboardNav />

            <section className='d-flex justify-content-between p-5'>

                {/* LEFT SIDE */}
                <div className='left'>

                    <div className='d-flex justify-content-between'>
                        <span className='rounded-pill bg-dark text-light px-2'>
                            {idea.category}
                        </span>

                        <span>
                            Posted by:{" "}
                            {idea.createdBy?.firstname}{" "}
                            {idea.createdBy?.lastname}
                        </span>
                    </div>

                    <h2 className='py-3'>{idea.title}</h2>

                    <img
                        src="/featured.jpg"
                        alt="Featured"
                        className='rounded-3'
                        width="100%"
                    />

                    <p className='py-4'>
                        {idea.fullIdeaDetails}
                    </p>

                </div>

                {/* RIGHT SIDE */}
                <div className='right'>

                    <button className='btn w-100 bg-dark text-light rounded-pill'>
                        Join Team
                    </button>

                    <button
                        className='btn w-100 bg-dark text-light rounded-pill mt-2'
                        onClick={handleUpvote}
                    >
                        Upvote Idea ({idea.upvotes?.length || 0})
                    </button>

                    {/* REQUIRED ROLES */}
                    <p className='pt-3'>REQUIRED ROLES</p>

                    <div className='d-flex flex-column gap-2'>

                        {[
                            idea.requiredRole1,
                            idea.requiredRole2,
                            idea.requiredRole3,
                            idea.requiredRole4
                        ]
                            .filter(r => r && r.trim() !== "")
                            .map((role, i) => (
                                <span
                                    key={i}
                                    className='rounded-pill bg-dark text-light px-2 d-block'
                                >
                                    {role}
                                </span>
                            ))}
                    </div>

                    {/* COMMENTS */}
                    <p className='pt-3'>COMMENTS</p>

                    <textarea
                        className='w-100'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write a comment..."
                    />

                    <button
                        className='btn bg-dark text-light w-100'
                        onClick={handleComment}
                    >
                        Post Comment
                    </button>

                    {/* COMMENT LIST */}
                    {idea.comments?.map((c, index) => (
                        <div key={index} className="border p-2 mt-2">

                            <b>
                                {c.user?.firstname} {c.user?.lastname}
                            </b>

                            <p>{c.text}</p>

                        </div>
                    ))}

                </div>
            </section>
        </>
    );
};

export default IdeaDetail;