import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Register.css";
let url = `http://localhost:5000/api/register`;
const Register = () => {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const nav = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        if (confirmPassword !== password) {
            alert("confirm password & password should be same to continue");
            return;
        }

        const json = JSON.stringify({ email, password, contact, name });
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json,
        });
        const data = await response.json();
        alert(data.msg);
        if (data.success) {
            localStorage.setItem("token", data.token);
            nav("/");
        }
    };
    useEffect(() => {
        document.title = "Register - Instagram";
    }, []);

    return (
        <div className="register__container width-50 m-auto">
            {/* LOGIN PAGE MAIN GRID  */}
            <div className="mt-2 gtc-2 gap-2">
                <div className=" right">
                    <div className="card width-50p">
                        <p className="color-gray weight-500">
                            Sign up to see photos and videos <br /> from your
                            friends
                        </p>
                        <button
                            type="submit"
                            className="btn my-1 py-min mt-1 rounded-6 max"
                        >
                            Log In with facebook
                        </button>
                        <form onSubmit={registerUser}>
                            <input
                                className="input"
                                type="text"
                                placeholder="User Name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                className="input"
                                type="email"
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <input
                                className="input"
                                type="tel"
                                placeholder="03034243243"
                                onChange={(e) => setContact(e.target.value)}
                                value={contact}
                            />
                            <input
                                className="input"
                                type="text"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                            <input
                                type="text"
                                className="input"
                                placeholder="Confirm Password"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                value={confirmPassword}
                            />
                            <p className="my-1">
                                <small className="text__color">
                                    People who use our service may have uploaded
                                    your contact information to Instagram.
                                    <a className="helper__color" href="#">
                                        Learn More
                                    </a>
                                </small>
                            </p>
                            <p>
                                <small className="text__color">
                                    By signing up, you agree to our
                                    <a className="helper__color" href="#">
                                        Terms
                                    </a>{" "}
                                    ,
                                    <a className="helper__color" href="#">
                                        Privacy Policy
                                    </a>{" "}
                                    and
                                    <a className="helper__color" href="#">
                                        Cookies Policy
                                    </a>{" "}
                                    .
                                </small>
                            </p>
                            <button
                                type="submit"
                                className="btn mt-1 rounded-5 max"
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="card mt-1">
                        <p>
                            Have an Account ?{" "}
                            <Link to="/login" className="main-color">
                                log in
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

export default Register;
