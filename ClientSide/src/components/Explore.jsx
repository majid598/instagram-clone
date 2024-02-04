import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const Explore = () => {
    const nav = useNavigate();
    useEffect(() => {
        if (!document.cookie) {
            nav("/login");
        }
    }, []);
    return <div>Explore</div>;
};

export default Explore;
