import { useState } from "react";
import Logo from "./logo.svg";
import HomeFilled from "./home-filled.svg";
import HomeOutlined from "./home-outlined.svg";
import SearchFilled from "./search-filled.svg";
import SearchOutlined from "./search-outlined.svg";
import CategoryFilled from "./category-filled.svg";
import CategoryOutlined from "./category-outlined.svg";
import MoviesFilled from "./movies-filled.svg";
import MoviesOutlined from "./movies-outlined.svg";
import GroupFilled from "./group-filled.svg";
import GroupOutlined from "./group-outlined.svg";
import "./SideNav.css";

const navItems = [
  {
    title: "home",
    filledIcon: <HomeFilled className="icon filled" />,
    outlinedIcon: <HomeOutlined className="icon" />,
  },
  {
    title: "search",
    filledIcon: <SearchFilled className="icon filled" />,
    outlinedIcon: <SearchOutlined className="icon" />,
  },
  {
    title: "movies",
    filledIcon: <MoviesFilled className="icon filled" />,
    outlinedIcon: <MoviesOutlined className="icon" />,
  },
  {
    title: "categories",
    filledIcon: <CategoryFilled className="icon filled" />,
    outlinedIcon: <CategoryOutlined className="icon" />,
  },
  {
    title: "group-watching",
    filledIcon: <GroupFilled className="icon filled" />,
    outlinedIcon: <GroupOutlined className="icon" />,
  },
];

export default function SideNav() {
  const [activeLink, setActiveLink] = useState(navItems[0].title);
  return (
    <div className="sidenav-container">
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.title}
              className={activeLink === item.title ? "active-nav" : ""}
              onClick={() => setActiveLink(item.title)}
            >
              {activeLink === item.title ? item.filledIcon : item.outlinedIcon}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
