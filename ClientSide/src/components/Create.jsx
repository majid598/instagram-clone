import React, { Fragment } from "react";
import { useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Create.css";

const url = "http://localhost:5000/post/createPost";

const Create = () => {
    const { post, setPost } = useGlobalContext();
    const [caption, setCaption] = useState("");
    const createPost = async (e) => {
        e.preventDefault();
        console.log("hell");
        const token = localStorage.getItem("token");
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token,
                img_caption: caption,
                img_url: "xxxxxx",
            }),
        });
        const data = response.json();
        console.log(data);
    };
    return post ? (
        <div className="container-create">
            <i
                onClick={() => setPost(false)}
                className="uil closeBtn   uil-times color-white"
            ></i>
            <div className="box">
                <h4 className="">Create Post</h4>
                <div className="small-box">
                    {/* <i className="uil uil-image med-font"></i>
                    <p className="exsmall-font">Drag photos and videos here</p>
                    <input
                        type="file"
                        name="image-upload"
                        id="image-upload"
                        className="btn mt-2 rounded-5"
                    /> */}
                    <form onSubmit={createPost}>
                        <input
                            type="text"
                            className="plane"
                            placeholder="caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                        />
                        <button type="submit" className="btn max-contentWidth">
                            Post
                        </button>
                    </form>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default Create;
