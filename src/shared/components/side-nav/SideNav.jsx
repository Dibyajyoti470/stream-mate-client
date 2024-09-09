import { useState } from "react";
import HomeFilled from "./home-filled.svg";
import HomeOutlined from "./home-outlined.svg";
import SearchFilled from "./search-filled.svg";
import SearchOutlined from "./search-outlined.svg";
import MoviesFilled from "./movies-filled.svg";
import MoviesOutlined from "./movies-outlined.svg";
import GroupFilled from "./group-filled.svg";
import GroupOutlined from "./group-outlined.svg";
import "./SideNav.css";

export default function SideNav() {
  const [activeLink, setActiveLink] = useState("home");
  return (
    <nav>
      <ul>
        <li
          className={activeLink === "home" ? "active-nav" : ""}
          onClick={() => setActiveLink("home")}
        >
          {activeLink === "home" ? (
            <HomeFilled className="icon filled" />
          ) : (
            <HomeOutlined className="icon" />
          )}
          {/* <span>Home</span> */}
        </li>
        <li
          className={activeLink === "search" ? "active-nav" : ""}
          onClick={() => setActiveLink("search")}
        >
          <SearchOutlined className="icon" />
        </li>
        {/* <li
          className={activeLink === "search" ? "active-nav" : ""}
          onClick={() => setActiveLink("search")}
        >
          {activeLink === "search" ? (
            <SearchFilled className="icon" />
          ) : (
            <SearchOutlined className="icon" />
          )}
        </li> */}
        <li
          className={activeLink === "movies" ? "active-nav" : ""}
          onClick={() => setActiveLink("movies")}
        >
          {activeLink === "movies" ? (
            <MoviesFilled className="icon filled" />
          ) : (
            <MoviesOutlined className="icon" />
          )}
        </li>
        <li
          className={activeLink === "group-watching" ? "active-nav" : ""}
          onClick={() => setActiveLink("group-watching")}
        >
          {activeLink === "group-watching" ? (
            <GroupFilled className="icon filled" />
          ) : (
            <GroupOutlined className="icon" />
          )}
        </li>
        <li>{/* <span>Categories</span> */}</li>
        <li>{/* <span>Account</span> */}</li>
      </ul>
    </nav>
  );
}
