import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Home.css";
import Create from "./Create";
import Post from "./Post";
import User from "./User";

const Home = () => {
    const {
        post,
        setShowNavbar,
        fetchLoggedInUser,
        user,
        getAllUsers,
        suggestions,
        getAllPosts,
        getAllFollowers,
        allPosts,
    } = useGlobalContext();
    const nav = useNavigate();

    useEffect(() => {
        document.title = "Instagram";
        fetchLoggedInUser();
        getAllUsers();
        getAllPosts();
        getAllFollowers();
        console.log(allPosts);
        if (!localStorage.getItem("token")) {
            setShowNavbar(false);
            nav("/login");
        } else {
            setShowNavbar(true);
        }
    }, []);

    return (
        user && (
            <>
                <div className="container home flex gap-1  width-50p m-auto ">
                    {/* //* HOME LEFT SIDE */}
                    <div className="home-left">
                        <div className="stories card rounded-6 p-1 flex gap-1">
                            <img
                                src="./assets/bg.jpg"
                                alt="Raju Website Creater"
                                className="br-50"
                                width={70}
                                height={70}
                            />
                            <img
                                src="./assets/bg.jpg"
                                alt="Raju Website Creater"
                                className="br-50"
                                width={70}
                                height={70}
                            />
                            <img
                                src="./assets/bg.jpg"
                                alt="Raju Website Creater"
                                className="br-50"
                                width={70}
                                height={70}
                            />
                            <img
                                src="./assets/bg.jpg"
                                alt="Raju Website Creater"
                                className="br-50"
                                width={70}
                                height={70}
                            />
                            <img
                                src="./assets/bg.jpg"
                                alt="Raju Website Creater"
                                className="br-50"
                                width={70}
                                height={70}
                            />
                        </div>
                        <div className="posts">
                            {allPosts.map((elem) => {
                                return (
                                    <Post
                                        user_id={elem.user}
                                        key={elem._id}
                                        id={elem._id}
                                        caption={elem.img_caption}
                                        likes={elem.likes.length}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    {/* // * RIGHT SIDE */}
                    <div className="home-right px-1 py-3">
                        <div className="flex space-between item-center">
                            <Link
                                to="/aboutme"
                                className="flex gap-min item-center"
                            >
                                <img
                                    src="./assets/bg.jpg"
                                    alt="Raju Website Creater"
                                    className="br-50"
                                    width={60}
                                    height={60}
                                />
                                <div>
                                    <p className="user-name">{user.name}</p>
                                    <p className="color-gray account-name">
                                        {user.email}
                                    </p>
                                </div>
                            </Link>
                            <a href="/user" className="main-color weight-600">
                                Switch
                            </a>
                        </div>
                        <div className="flex space-between my-1">
                            <p className="color-gray">Suggestions for You</p>
                            <a href="/seeall">See All</a>
                        </div>
                        {/* SUGGESTIONS FOR YOU */}
                        <div className="suggestions ">
                            {suggestions.length > 0
                                ? suggestions.map((elem) => {
                                      return user._id !== elem._id ? (
                                          <User
                                              key={elem._id}
                                              email={elem.email}
                                              id={elem._id}
                                              name={elem.name}
                                          />
                                      ) : (
                                          ""
                                      );
                                  })
                                : "No Suggestions"}
                        </div>
                        <div className="mt-3">
                            <ul className="flex gap-min bottom-bar">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Help</a>
                                </li>
                                <li>
                                    <a href="#">API</a>
                                </li>
                                <li>
                                    <a href="#">Press</a>
                                </li>
                                <li>
                                    <a href="#">Jobs</a>
                                </li>
                                <li>
                                    <a href="#">Privacy</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Locations</a>
                                </li>
                                <li>
                                    <a href="#">Languages</a>
                                </li>
                                <li>
                                    <p className="mt-1">
                                        &copy; {new Date().getFullYear()}{" "}
                                        Instagram by Raju made with{" "}
                                        <span className="main-color">♥</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default Home;
