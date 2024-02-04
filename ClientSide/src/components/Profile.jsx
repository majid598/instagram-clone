import React, { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Profile.css";
const Profile = () => {
    const {
        fetchLoggedInUser,
        setShowBox,
        getAllFollowings,
        user,
        getAllFollowers,
        setShowFollowers,
        setShowFollowings,
        setShowNavbar,
        removeFollower,
    } = useGlobalContext();
    useEffect(() => {
        fetchLoggedInUser();
        getAllFollowers();
        getAllFollowings();
        if (localStorage.getItem("token")) {
            setShowNavbar(true);
        }
    }, []);

    return (
        <div className="profile__container">
            <div className="profile__details mt-4 flex gap-3">
                <div className="profile__img flex item-center content-center">
                    <img
                        src="./assets/bg.jpg"
                        alt="Raju Profile image"
                        width={160}
                        height={160}
                        className="br-50"
                    />
                </div>
                <div className="details">
                    <div>
                        <span className="exsmall-font">
                            {user && user.email}
                        </span>
                        <button className="plane rounded-6 mx-1 weight-600">
                            Edit Profile
                        </button>
                    </div>
                    <small className="my-1 flex item-center gap-2">
                        <span
                            className="pointer"
                            // onClick={() => {setShowBox(true)}}
                        >
                            {" "}
                            <b>{user && user.posts.length}</b> Posts
                        </span>
                        <span
                            className="pointer"
                            onClick={() => {
                                setShowBox(true);
                                setShowFollowers(true);
                                setShowFollowings(false);
                            }}
                        >
                            <b>{user && user.followers.length}</b> followers
                        </span>
                        <span
                            className="pointer"
                            onClick={() => {
                                setShowBox(true);
                                setShowFollowers(false);
                                setShowFollowings(true);
                            }}
                        >
                            <b>{user && user.following.length}</b> following
                        </span>
                    </small>
                    <div className="user__name">{user && user.name}</div>
                    <small>
                        <p className="user__about">
                            #programmer An Enthusiastic Coder and A Full MERN
                            Stack Developer who loves to code. I love the way i
                            do
                        </p>
                        <a href="">mrraju.netlify.app</a>
                    </small>
                </div>
            </div>
            <hr className="mt-5" />
            <div className="grid gtc-3 gap-2">
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
                <div className="user__post_image">
                    <img src="./assets/bg.jpg" alt="User Post" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
