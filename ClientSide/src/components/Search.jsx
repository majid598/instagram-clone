import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/globalContext";
import "../Css/Search.css";
import SearchUser from "./SearchUser";

const Search = () => {
    const {
        showSearch,
        searchKeyword,
        setSearchKeyword,
        allUsers,
    } = useGlobalContext();
    const [filtered, setFiltered] = useState([]);
    const filterData = (e) => {
        setSearchKeyword(e.target.value);
        let value = e.target.value;
        if (value === "") {
            setFiltered([]);
            return;
        }
        const users = allUsers.filter((element) =>
            element.name.includes(value)
        );
        setFiltered(users);
    };
    return (
        <div>
            {showSearch ? (
                <div className="search-side">
                    <h3>Search</h3>
                    <div className="search">
                        <input
                            type="text"
                            className="rounded-1 mt-1"
                            placeholder="Search User"
                            value={searchKeyword}
                            onChange={filterData}
                        />
                    </div>
                    {/* <SearchUser/> */}
                    {filtered &&
                        filtered.map((elem) => {
                            return <SearchUser element={elem} />;
                        })}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Search;
