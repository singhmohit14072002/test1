import React, { useState } from 'react'
import "./JobPosting.css"
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

function JobPosting() {

  const [SearchFlag, SetSearchFlag] = useState(false);

  function handleSearch() {
    SetSearchFlag(!SearchFlag);
    console.log("clicked");
  }

  let CompanyDetails=[
    {
      id:1,
      CompanyName:"Jhol Company",
      JobRole:"Java Developer",
      JobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! ",
      JobLocation:"Remote",
      JobSalary:"$50,000"
    },
    {
      id:2,
      CompanyName:"Ameer Company",
      JobRole:"Accountant",
      JobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! ",
      JobLocation:"Mumbai",
      JobSalary:"$1,00,000"
    },
    {
      id:3,
      CompanyName:"Khol Company",
      JobRole:"Pehelwaan",
      JobDescription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora!consectetur adipisicing elit. Sint dolorem quasi optio repellendus nostrum mollitia vel alias reprehenderit harum tempora! ",
      JobLocation:"Delhi",
      JobSalary:"$10,000"
    }
  ]

  return (
    <div className='w-screen'>
      <div className="overflow-x-hidden">
        <div>
          <div className="h-[60px] w-screen border-b-[1px] border-solid border-black shadow-md box-border pl-3">
            <ul className="list-none flexItems justify-evenly h-[60px] font-bold text-base">
              <li className="flex-1 text-center"><input type="text" placeholder="Search" className={`w-full  ${SearchFlag ? null: `scale-x-0 none`}`}
              /><span onClick={handleSearch} className={`${SearchFlag ? `scale-x-0 none` : null}`} >Search</span></li>
              <li className="flex-1 text-center">Post</li>
              <li className="flex-1 text-center">Instant Job</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-2 w-screen">


            {CompanyDetails.map((Company)=>{
              return(
              <div className="p-2 mt-1 shadow-md box-border">
              <div className="flexItems justify-between rounded pl-3  pr-3 bg-[#57a7b330]">
                <div>
                  <h1 className="font-bold text-xl">{Company.CompanyName}</h1>
                  <h2 className="text-sm text-gray-500 mb-2">{Company.JobRole}</h2>
                </div>
                <div className="mb-6 mt-2">
                  <div className="bg-gray-200 flexItems justify-center rounded-3xl w- h-10 text-xl">
                  <KeyboardTabIcon /></div>
                </div>
              </div>
              <p className="italic text-sm mb-2">{Company.JobDescription.substring(0,100)}</p>
              <div className="flexItems justify-between"><span
                className="text-sm text-gray-500 font-bold">{Company.JobLocation}</span><span
                  className="text-sm text-gray-500 font-bold">{Company.JobSalary}</span>
              </div>
            </div>);
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobPosting
