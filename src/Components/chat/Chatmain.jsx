import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { FcVideoCall } from "react-icons/fc";
import { BsThreeDotsVertical } from "react-icons/bs";
import Onlineperson from "./Onlineperson";

export default function Chatmain(){
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <>
      <div className="w-screen h-full p-36  flex justify-end items-start gap-10">

        {/* chat section */}
        <div className="w-[800px] bg-white rounded-2xl p-5"> 
          <div className="">
            {/* uppersection */}
            <div className="border-gray-500 shadow-xl rounded-3xl">
              {/* nav */}
              <div className="flex flex-row justify-between items-center rounded-t-xl border     ">
                <div className=" flex justify-start items-center">
                  <img
                    src="images/user.png"
                    alt="/"
                    className="rounded-full h-[60px]"
                  />
                  <p className="uppercase text-xl">pandit</p>
                </div>
                <div className=" flex justify-start gap-4 text-2xl">
                  <FcVideoCall className="cursor-pointer"/>
                  <BsThreeDotsVertical className="cursor-pointer" />
                </div>
              </div>
              {/* message panel */}
              <div className=" bg-[#57a7b320] rounded-b-3xl h-[400px]"></div>
            </div>

            {/* lowe messagw section */}
            <div className="pt-5">
              <div className=" -z-10 cursor-text">
                <InputEmoji
                  value={text}
                  onChange={setText} 
                  cleanOnEnter
                  onEnter={handleOnEnter}
                  placeholder="Enter Your Message Here"
                  className=" -z-10 cursor-pointer"
                />
              </div>

            </div>
          </div>
        </div>
        <Onlineperson/>
      </div>
    </>
  );
};
