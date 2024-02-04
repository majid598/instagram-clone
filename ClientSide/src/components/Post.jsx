import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Post.css";

const Post = ({ caption, likes, id, user_id }) => {
    const [user, setUser] = useState({});

    const { likePost } = useGlobalContext();
    const getUser = async (id) => {
        console.log(id);
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/api/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, userId: id }),
        });

        const data = await response.json();
        setUser(data.user);
    };
    useEffect(() => {
        // console.log(props.user)
        getUser(user_id);
    }, []);

    return (
        <div className="post p-0 card">
            <div className="flex space-between item-center p-1 gap-min">
                <div className="flex space-between gap-min">
                    <img
                        src="./assets/bg.jpg"
                        alt=""
                        width={40}
                        height={40}
                        className="br-50"
                    />
                    <div>
                        <p className="user-name">{user.name}</p>
                        <p className="user-about">{user.email}</p>
                    </div>
                </div>
                <a href="#">
                    <i className="uil exsmall-font uil-ellipsis-h"></i>
                </a>
            </div>
            <div className="post-image">
                <img src="./assets/bg.jpg" alt="" />
            </div>
            <div className="post-about">
                <div className="flex space-between item-center p gap-min">
                    <div>
                        <button
                            className="bg-transparent plane"
                            onClick={() => likePost(id)}
                        >
                            <i className="uil exsmall-font uil-heart"></i>
                        </button>
                        <button className="bg-transparent plane">
                            <i className="uil exsmall-font uil-comment"></i>
                        </button>
                        <button className="bg-transparent plane">
                            <i className="uil exsmall-font uil-share"></i>
                        </button>
                    </div>

                    <button className="bg-transparent plane">
                        <i className="uil exsmall-font uil-bookmark"></i>
                    </button>
                </div>
                <div>
                    <div className="p-1">
                        <p>
                            <span className="weight-500">
                                {likes == 1
                                    ? `${likes} like`
                                    : `${likes} likes`}{" "}
                            </span>
                        </p>
                        <p className="caption">{caption}</p>
                        <a className="color-gray pointer">View All Comments</a>
                        <small className="color-gray time">1 DAY AGO</small>
                    </div>
                    <div className="comment px-1 flex gap-min item-center">
                        <span>😘</span>
                        <input
                            type="text"
                            className="comment-input"
                            placeholder="Add a comment"
                            id="commentBox"
                        />
                        <button
                            href="#"
                            className="main-color plane weight-600 bg-transparent"
                        >
                            POST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
