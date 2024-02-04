import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";

const SearchUser = ({ element }) => {
    const [follow, setFollow] = useState(false);
    const { unFollowUser, followUser } = useGlobalContext();
    return (
        <div className="flex my-1 space-between item-center">
            <Link className="flex gap-min item-center">
                <img
                    src="./assets/bg.jpg"
                    alt="Raju Website Creater"
                    className="br-50"
                    width={50}
                    height={50}
                />
                <div>
                    <p className="user-name">{element.name}</p>
                    <small className="color-gray account-name">
                        {element.email}
                    </small>
                </div>
            </Link>
            {follow ? (
                <button
                    onClick={() => {
                        unFollowUser(element._id);
                    }}
                    className="btn rounded-5 weight-600"
                >
                    Un Follow
                </button>
            ) : (
                <button
                    onClick={() => {
                        setFollow(true);
                        followUser(element._id);
                    }}
                    className="btn rounded-5 weight-600"
                >
                    Follow
                </button>
            )}
        </div>
    );
};

export default SearchUser;
