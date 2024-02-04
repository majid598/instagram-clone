import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import "../Css/SideNav.css";

const SideNav = () => {
    const nav = useNavigate();
    const {
        notification,
        showNavbar,
        showSearch,
        setPost,
        setShowSearch,
        setIsLoggedIn,
        setNotification,
        setShowNavbar,
    } = useGlobalContext();

    const logOut = async () => {
        localStorage.clear();
        setIsLoggedIn(false);
        setShowNavbar(false);
        nav("/login");
    };
    return (
        <>
            {localStorage.getItem("token") && (
                <i class="uil btn__logout uil-signout" onClick={logOut}></i>
            )}
            {showNavbar ? (
                <div
                    className={
                        showSearch || notification
                            ? "side-nav little-side-nav"
                            : "side-nav "
                    }
                >
                    {notification || showSearch ? (
                        <img
                            className="my-2 "
                            src="favicon_io/favicon-32x32.png"
                            alt="Logo Instagram"
                        />
                    ) : (
                        <h2 className="my-2  heading-logo">Instagram</h2>
                    )}

                    <ul>
                        <li className="my-2">
                            <Link className="" to="/">
                                <i className="uil uil-estate mr-1"></i>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <button
                                className="plane bg-transparent"
                                onClick={() => {
                                    if (showSearch) {
                                        setShowSearch(false);
                                    } else {
                                        setNotification(false);
                                        setShowSearch(true);
                                    }
                                }}
                            >
                                <i className="uil uil-search mr-1"></i>
                                <span>Search</span>
                            </button>
                        </li>
                        <li className="my-2">
                            <Link className="" to="/explore">
                                <i className="uil uil-compass mr-1"></i>
                                <span>Explore</span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <Link className="" to="/chats">
                                <i className="uil uil-facebook-messenger-alt mr-1"></i>{" "}
                                <span>Chats</span>
                            </Link>
                        </li>
                        <li className="my-2">
                            <button
                                className="flex gap-1 plane bg-transparent item-center"
                                to="/notifications"
                                onClick={() => {
                                    if (notification) {
                                        setNotification(false);
                                    } else {
                                        setNotification(true);
                                        setShowSearch(false);
                                    }
                                }}
                            >
                                <i className="uil uil-heart"></i>
                                <span>Notifications</span>
                            </button>
                        </li>
                        <li className="my-2">
                            <button
                                className="plane bg-transparent"
                                to="/post"
                                onClick={() => {
                                    setPost(true);
                                }}
                            >
                                <i className="uil uil-plus mr-1"></i>
                                <span>Create</span>
                            </button>
                        </li>
                        <li className="my-2">
                            <Link className="profile-list" to="/aboutme">
                                <img
                                    src="./assets/Login.png"
                                    alt="Login"
                                    width={30}
                                    className={`br-50 ${
                                        notification || showSearch
                                            ? "mr - 1"
                                            : ""
                                    }`}
                                    height={30}
                                />
                                <span className="ml-1">Profile</span>
                            </Link>
                        </li>
                        <li className=" mt-7">
                            <button className="plane flex item-center bg-transparent">
                                <i className="uil uil-bars mr-1"></i>
                                <span>More</span>
                            </button>
                        </li>
                    </ul>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default SideNav;
