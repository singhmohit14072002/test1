import React from "react";
import "./Navbar.css";
import ChatIcon from "@mui/icons-material/Chat"
import Notification from '@mui/icons-material/Notifications';
import People from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';



function Navbar(){
    return(
    <div className="navbar">
        <div className="LeftContainer">
        <img src="public\Images\LOGO.png" alt="LOGO" className="LogoImg"/>
        </div>

        <div className="MiddleContainer">
        <form className="Searchform">
        <input className="SearchBar" placeholder="Search for post,friends or video" />
        <button className="Searchbtn" type="submit"><SearchIcon /></button> 
        </form>
        </div>

        <div className="RightContainer">
        <div><HomeIcon /></div>
        <div><People /> <span className="Queries">2</span></div>
        <div><Notification /> <span className="Queries">1</span></div>
        <div><ChatIcon /> <span className="Queries">2</span></div>
        <div className="ProfileImg"><img src="#" alt="ProfileImg"></img></div>
        </div>

    </div>
    );
}

export default Navbar;