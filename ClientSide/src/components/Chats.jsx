import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Chats.css";
import Chat from "./Chat";

let id = "saad";
const Chats = () => {
    const { indicator, setIndicator } = useGlobalContext();
    // useEffect(() => {
    //     if (!document.cookie) {
    //         // nav("/login");
    //     }
    // }, []);
    return (
        <>
            <div className="container chats-page">
                <div className="chats">
                    <p className="logged-user center py-1">Mr raju</p>
                    <div className="user-chats p-1">
                        <div
                            className="my-1"
                            onClick={() => {
                                setIndicator(true);
                            }}
                        >
                            <div className="flex gap-min item-center pointer">
                                <img
                                    src="./assets/bg.jpg"
                                    alt="SAAD Website Creater"
                                    className="br-50"
                                    width={60}
                                    height={60}
                                />
                                <div>
                                    <p className="user-name">Mr raju</p>
                                    <p className="color-gray active-time">
                                        active 39m ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Chat />
            </div>
        </>
    );
};

export default Chats;
