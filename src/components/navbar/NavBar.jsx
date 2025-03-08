import React from "react";
import Search from "../search/Search";
import Button from "../button/Button";
import "./navbar.css";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav>
        {/* <Link to="/"> */} <Logo /> {/* </Link> */}
        <Search placeHolder={"Search a song of your choice"} />
        <Button>Feedback</Button>
      </nav>
    </>
  );
};

export default NavBar;
