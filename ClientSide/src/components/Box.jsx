import React from "react";
import { useGlobalContext } from "../context/globalContext";
import User from "../components/User";
import "../Css/Box.css";
import { useEffect } from "react";

const Box = () => {
    const {
        setShowBox,
        showBox,
        user,
        followings,
        showFollowings,
        showFollowers,
        followers,
        getAllFollowers,
        getAllFollowings,
    } = useGlobalContext();
    useEffect(() => {
        getAllFollowers();
        getAllFollowings();
    }, []);

    return (
        showBox && (
            <div className="box__small">
                {showFollowers && <h3 className="center">Followers</h3>}
                {showFollowings && <h3 className="center">Following</h3>}
                <i
                    onClick={() => setShowBox(false)}
                    className="uil closeBtn   uil-times color-dark mb-1"
                ></i>
                <div className="p-1 box__container">
                    {showFollowings &&
                        followings.map((elem) => {
                            return (
                                <User
                                    email={elem.email}
                                    name={elem.name}
                                    id={elem._id}
                                    followed="true"
                                />
                            );
                        })}
                    {showFollowers &&
                        followers.map((elem) => {
                            return (
                                <User
                                    email={elem.email}
                                    name={elem.name}
                                    id={elem._id}
                                    followers="true"
                                />
                            );
                        })}
                    {}
                </div>
            </div>
        )
    );
};

export default Box;
