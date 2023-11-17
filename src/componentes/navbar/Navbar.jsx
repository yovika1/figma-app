import React from "react";
import Logo from "../../media/Logo Icon.png";
import "./Navbar.css";
import arrow from "../../media/arrow.png";
import vector from "../../media/Vector.png";
// import {Link,NavLink} from 'react-router-dom'
import navbarLink from "../../Data/Navbar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="brand_logo">
          <img src={Logo} alt="" height={20} width={20} />
          <span className="txt">Whitespace</span>
        </div>
        {/* <div className="navbar"> */}
        {navbarLink.map((item, index) => {
          return (
            <div key={index} className="nav">
              <Link to={item.link} className="nav1">
                {item.title}
                <img className="arrw" src={vector} alt="" />
              </Link>
            </div>
          );
        })}
        {/* </div> */}
        <span>
          <Link to="/loginpage" className="login">
            Login
          </Link>
        </span>
        <span className="free">
          Try whitepace free <img src={arrow} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
