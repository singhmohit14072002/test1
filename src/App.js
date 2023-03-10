import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Chatmain from "./Components/chat/Chatmain";
import Home from "./Components/Home/Home.jsx";
import Profilepage from "./Components/ProfilePage/Profilepage.jsx";
import JobPosting from "./Components/JobPosting/JobPosting.jsx";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
    <Navbar />
    {/* <Home /> */}
    <Profilepage />
    {/* <Chatmain /> */}
    {/* <JobPosting /> */}
    </div>
  );
}

export default App;
