import React from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Chats.css";

const Chat = () => {
    const { indicator } = useGlobalContext();
    return (
        <>
            <div className="chat">
                {indicator ? (
                    <div>
                        <div className="flex user-chat space-between item-center">
                            <div className="flex  gap-min item-center pointer">
                                <img
                                    src="./assets/bg.jpg"
                                    alt="Raju Website Creater"
                                    className="br-50"
                                    width={30}
                                    height={30}
                                />
                                <div>
                                    <p className="user-name">Mr raju</p>
                                    <p className="color-gray active-time">
                                        active 39m ago
                                    </p>
                                </div>
                            </div>
                            <button className="plane pointer bg-transparent">
                                <i className="uil small-font uil-info-circle"></i>
                            </button>
                        </div>
                        {/* //* MESSAGES */}
                        <div className="messages">
                            <p className="my message-box">
                                hello There How are you ?
                            </p>{" "}
                            {/* <span>06:52</span> */}
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                            <p className="to message-box">fine</p>
                        </div>
                        {/* <span className="msg-time">06:53</span> */}
                        <div className="chat-input">
                            <button className="plane pointer bg-transparent">
                                <i className="uil small-font uil-smile"></i>
                            </button>
                            <input
                                type="text"
                                placeholder="Message"
                                className="plane bg-transparent "
                            />
                            <button className="plane pointer bg-transparent">
                                <i className="uil small-font uil-image"></i>
                            </button>
                            <button className="plane pointer bg-transparent">
                                <i className="uil small-font uil-heart"></i>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex content-center item-center">
                        <p className="small-font ">Your Messages</p>
                        <p className=" color-gray">
                            Send private photos and messages to your friends
                        </p>
                        <button className="btn rounded-5">Send Message</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chat;
