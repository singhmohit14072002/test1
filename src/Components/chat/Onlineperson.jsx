import React from 'react';


export default function Onlineperson(){
    const Friends = [
      {
        id: 1,
        category: "friend",
        name: "Akash",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 2,
        category: "friend",
        name: "Harsh",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 3,
        category: "friend",
        name: "surveer singh",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 4,
        category: "friend",
        name: "pandit",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 5,
        category: "friend",
        name: "ekta",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 6,
        category: "friend",
        name: "prasanth",
        active: true,
        icon: "images/user.png",
      },
      {
        id: 6,
        category: "friend",
        name: "Tanisqa",
        active: true,
        icon: "images/user.png",
      }
    ];
  return (
    <>
    {/* <Navbar/> */}
    <div className=" w-[320px] h-auto flex  justify-centers flex-col items-centers bg-white rounded-2xl">
        {/* friendList */}
        <div className=" flex  pl-[10%] flex-col items-start mb-3">
            <p className=" text-xl  font-semibold py-3 ">My Connection</p>
            <div className=" flex  flex-col cursor-pointer mt-1">
            {Friends.map(({ name, icon  }) => (
            <div key={name} className="flex  items-center justify-start">
              <img src={icon} alt={`${name} show poster`} className='rounded-full h-[40px]' />
              <h2 className="text-md font-normal uppeercase  ">{name}</h2>
            </div>
          ))}
            </div>

        </div>
        <hr className="border border-slate-400 w-[280px]  m-auto" />
        {/* footer */}
        <div className=" flex flex-col text-xs mt-3">
            <div className="">
            <ul className="flex flex-row gap-2 justify-center items-center mb-1  pb-2">
                    <li className="cursor-pointer">Copyright policy</li>
                    <li className="cursor-pointer">Privacy policy</li>
                    <li className="cursor-pointer">User Agreemant</li>
                </ul>
            </div>
            <div className="">
            <ul className="flex justify-center flex-row gap-2 pb-2 mb-2">
                    <li className="cursor-pointer mr-2">cookie police</li>
                    <li className="cursor-pointer">community Guidelines</li>
                </ul>
            </div>
             <hr className="border border-slate-400 w-[200px] justify-center align-middle content-center flex m-auto" />
            <div className="">
            <ul className="flex flex-row gap-4 justify-center items-center py-2 mt-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Help?</li>
                </ul>
            </div>
        </div>

    </div>
    </>
  )
}
