import React, { useEffect } from "react";
import { useGlobalContext } from "../context/globalContext";

const User = (props) => {
    const {
        removeFollower,
        getAllFollowers,
        getAllFollowings,
        followUser,
        unFollowUser,
        showFollowers,
    } = useGlobalContext();

    return (
        <div className="flex my-1 space-between item-center">
            <div className="flex gap-min item-center">
                <img
                    src="./assets/bg.jpg"
                    alt="Raju Website Creater"
                    className="br-50"
                    width={50}
                    height={50}
                />
                <div>
                    <p className="user-name">{props.name}</p>
                    <p className="color-gray account-name">{props.email}</p>
                </div>
            </div>
            {showFollowers && (
                <button
                    onClick={() => {
                        removeFollower(props.id);
                    }}
                    className="btn rounded-5 weight-600"
                >
                    <small className="color-light">Remove</small>
                </button>
            )}
            {!showFollowers && props.followed === "true" ? (
                <a
                    onClick={() => {
                        unFollowUser(props.id);
                        getAllFollowings();
                    }}
                    className="main-color pointer  weight-600"
                >
                    <small className="main-color">un follow</small>
                </a>
            ) : (
                !showFollowers && (
                    <a
                        onClick={() => {
                            followUser(props.id);
                            getAllFollowings();
                        }}
                        className="main-color pointer  weight-600"
                    >
                        <small className="main-color">Follow</small>
                    </a>
                )
            )}
        </div>
    );
};

export default User;
