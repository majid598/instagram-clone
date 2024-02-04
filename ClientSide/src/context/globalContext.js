import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
// import { useNavigate } from "react-router-dom";
const AppContext = React.createContext();
const url = "http://localhost:5000/api";

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [showNavbar, setShowNavbar] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [notification, setNotification] = useState();
    const [post, setPost] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const [allUsers, setAllUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [allPosts, setAllPosts] = useState([]);
    const [showBox, setShowBox] = useState(false);
    const [followings, setFollowings] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showFollowers, setShowFollowers] = useState(false);
    const [showFollowings, setShowFollowings] = useState(false);

    const fetchLoggedInUser = async () => {
        console.log("fetching User");
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/aboutme`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        let data = await response.json();
        if (data.success) {
            setUser(data.user);
        }
    };

    const getAllFollowers = async () => {
        const temp = [];
        user &&
            user.followers.map(async (user) => {
                // console.log(elem);
                const response = await fetch(`${url}/getuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userId: user }),
                });
                const data = await response.json();
                temp.push(data.user);
            });
        console.log(temp);
        setFollowers(temp);
    };

    const getAllFollowings = async () => {
        const temp = [];
        user &&
            user.following.map(async (user) => {
                const response = await fetch(`${url}/getuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ userId: user }),
                });
                const data = await response.json();
                console.log(data.user);
                temp.push(data.user);
            });
        console.log(temp);
        setFollowings(temp);
    };

    const getAllUsers = async () => {
        // api/admin/getallusers

        const response = await fetch(`${url}/admin/getallusers`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await response.json();
        console.log(user.following);
        let newData = data.users.filter((curr_user) =>
            user.following.includes(curr_user._id)
        );
        setAllUsers(data.users);
        if (user.following.length === 0) {
            setSuggestions(data.users);
        } else {
            setSuggestions(newData);
        }
    };

    const removeFollower = async (id) => {
        const token = localStorage.getItem("token");

        const response = await fetch(`${url}/removefollower`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: id, token }),
        });
        let data = await response.json();
        alert(data.msg);
    };

    const getAllPosts = async () => {
        const token = localStorage.getItem("token");

        const response = await fetch(`http://localhost:5000/post/allposts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token }),
        });
        let data = await response.json();
        setAllPosts(data.posts);
    };
    const followUser = async (id) => {
        const response = await fetch(`${url}/follow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: id,
                token: localStorage.getItem("token"),
            }),
        });
        const data = await response.json();
        alert(data.msg);
        fetchLoggedInUser();
        getAllFollowers();
        getAllFollowings();
    };

    const unFollowUser = async (id) => {
        console.log(id);
        const response = await fetch(`${url}/unfollow`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: id,
                token: localStorage.getItem("token"),
            }),
        });
        const data = await response.json();
        alert(data.msg);
        fetchLoggedInUser();
        getAllFollowers();
        getAllFollowings();
    };
    // Like the post parameter required id of the post to be liked
    const likePost = async (id) => {
        console.log(id);
        const response = await fetch(`http://localhost:5000/post/like`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                postId: id,
                token: localStorage.getItem("token"),
            }),
        });
        const data = await response.json();
        // alert(data.msg);
        if (data.success) {
            getAllPosts();
            console.log(allPosts);
        }
    };
    return (
        <AppContext.Provider
            value={{
                showNavbar,
                user,
                name,
                email,
                password,
                confirmPassword,
                notification,
                showSearch,
                post,
                allUsers,
                searchKeyword,
                isLoggedIn,
                showBox,
                followers,
                followings,
                showFollowers,
                showFollowings,
                suggestions,
                allPosts,
                setSuggestions,
                setShowFollowers,
                setShowFollowings,
                setFollowers,
                setFollowings,
                setShowBox,
                setIsLoggedIn,
                setSearchKeyword,
                setPost,
                setShowSearch,
                setNotification,
                setConfirmPassword,
                setShowNavbar,
                setUser,
                setPassword,
                getAllUsers,
                setName,
                setEmail,
                followUser,
                unFollowUser,
                getAllPosts,
                getAllFollowers,
                fetchLoggedInUser,
                removeFollower,
                likePost,
                getAllFollowings,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
