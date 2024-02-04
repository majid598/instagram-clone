import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import { useEffect } from "react";
const host = "http://localhost:5000/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const { setShowNavbar, fetchLoggedInUser, getAllUsers, setIsLoggedIn } =
        useGlobalContext();

    const LogInUser = async (e) => {
        e.preventDefault();
        let url = `${host}/login`;
        const d = JSON.stringify({ email, password });
        console.log(d);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log(data);
        // if()
        // todo
        /*
        if success
        then navigate to home
        and set Nav to show
         */
        alert(data.msg);
        if (data.success) {
            setShowNavbar(true);
            localStorage.setItem("token", data.token);
            fetchLoggedInUser();
            getAllUsers();
            setIsLoggedIn(true);
            nav("/");
        }
    };

    useEffect(() => {
        document.title = "Login - Instagram";
        if (localStorage.getItem("token")) {
            nav("/");
        }
    }, []);

    return (
        <div className="container width-50 m-auto">
            {/* LOGIN PAGE MAIN GRID  */}
            <div className="grid mt-2 gtc-2 gap-2">
                <div className="left flex">
                    <div className="img-1">
                        <img width="100%" src="./assets/Login.png" alt="" />
                    </div>
                </div>
                <div className=" right">
                    <div className="card">
                        <h2 className="my-2 med-font heading-logo">
                            Instagram
                        </h2>
                        <form onSubmit={LogInUser}>
                            <input
                                className="input"
                                type="text"
                                placeholder="Phone number,username or email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <button
                                type="submit"
                                className={`btn mt-1 rounded-6 max ${
                                    email.length >= 13 && password.length >= 3
                                        ? ""
                                        : "disable"
                                }`}
                            >
                                Log In
                            </button>
                        </form>
                        <p className="my-1">
                            <b className="color-gray style my-2">OR</b>
                        </p>
                        <div className="my-1">
                            <a href="/facebook.com" className="main-color ">
                                Login with Facebook
                            </a>
                        </div>
                        <Link href="/forgot">Forgot Password ?</Link>
                    </div>
                    <div className="card">
                        <p>
                            Don't have an Account ?{" "}
                            <Link to="/register" className="main-color">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                    <div>
                        <p className="my-min">Get the app</p>
                        <div className="flex gap-2 content-center item-center">
                            <img
                                width={150}
                                className="pointer"
                                src="./assets/playstore.png"
                                alt="Play Store"
                            />
                            <img
                                width={120}
                                className="pointer"
                                src="./assets/micro.png"
                                alt="Microsoft"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM BAR WHICH CONTAIN IMPORTANT LINKS */}
            <div className="mt-3">
                <ul className="flex gap-1 bottom-bar">
                    <li>
                        <Link to="/">Meta</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/">Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Help</Link>
                    </li>
                    <li>
                        <Link to="/">API</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy</Link>
                    </li>
                    <li>
                        <Link to="/">Terms</Link>
                    </li>
                    <li>
                        <Link to="/">Top Accounts</Link>
                    </li>
                    <li>
                        <Link to="/">Hashtags</Link>
                    </li>
                    <li>
                        <Link to="/">Locations</Link>
                    </li>
                    <li>
                        <Link to="/">Instagram lite</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Uploading & Non Users</Link>
                    </li>
                    <li>
                        <Link to="/">English</Link>
                    </li>
                    <li>
                        <p>
                            &copy; {new Date().getFullYear()} Instagram by Raju
                            made with <span className="main-color">♥</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Login;
