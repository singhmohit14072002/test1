import React, { useState } from 'react';
import InfoCard from './InfoCard/InfoCard.jsx';
import PostCard from './PostCard/PostCard.jsx';
import "./Profilepage.css";

export default function Profilepage() {


    const [rmFlag, SetrmFlag] = useState(false);

    function handleClick() {
        SetrmFlag(!rmFlag);
    }

    const [changeDivFlag, SetchangeDivFlag] = useState({
        PersonalInfo: true,
        Education: false,
        Skills: false,
        WorkExperience: false
    });

    function PersonalInfoHandler() {
        SetchangeDivFlag({
            PersonalInfo: true,
            Education: false,
            Skills: false,
            WorkExperience: false
        })
    }

    function EducationHandler() {
        SetchangeDivFlag({
            PersonalInfo: false,
            Education: true,
            Skills: false,
            WorkExperience: false
        })
    }

    function SkillsHandler() {
        SetchangeDivFlag({
            PersonalInfo: false,
            Education: false,
            Skills: true,
            WorkExperience: false
        })
    }

    function WorkExperienceHandler() {
        SetchangeDivFlag({
            PersonalInfo: false,
            Education: false,
            Skills: false,
            WorkExperience: true
        })
    }

    const [editFlag, setEditFlag] = useState(false);

    function handleEdit(event) {
        setEditFlag(!editFlag);
        event.preventDefault();
    }

    let profileInfo = {
        personalInfo: {
            Name: "Pandit Ji",
            tagline:"Hi there",
            aboutText: "Cras id sapien auctor, dignissim ante nec, rhoncus libero. Fusce ut urna quis massa consectetur mollis. Integer cursus neque vel lorem auctor tincidunt. Pellentesque sit amet lobortis metus. Praesent urna mauris, bibendum sodales urna nec, malesuada tincidunt turpis. Nulla vitae fringilla quam. Maecenas pretium nulla tellus, non elementum erat iaculis vel. Quisque fermentum congue nulla, vitae aliquet risus molestie vel. Curabitur lobortis laoreet cursus",
            Email: "pandit@email.com",
            Phone: "+91 1234567890",
            Gender: "Male",
            DOB: "dd/mm/yyyy",
            githubLink: "#",
            facebookLink: "#",
            linkedinLink: "#"
        },

        skills: [
            {
                skillName: "HTML",
                skillDescription: "It is a very advanced next level out of the world language",
            },
            {
                skillName: "CSS",
                skillDescription: "It is a very advanced next level out of the world language",
            }
        ],

        Education: [
            {
                instituteName: "ABC School",
                instituteDescription: "It was a very bad school"
            },
            {
                instituteName: "DEF Comlej",
                instituteDescription: "It was a very bad Comlej"
            }],

        WorkExp: [
            {
                jobDesignation: "Bodyguard",
                jobExperience: "Very Easy Job, just have to sleep in this job"
            },
            {
                jobDesignation: "Night Guard",
                jobExperience: "Very Easy Job, just have to sleep in this job"
            }]
        }

    return (
        <div>

            <div className="bodyDiv">
                <div className="flex justify-center items-center flex-row-reverse">
                    <div className="personalInfo">
                        <div className="w-[70%]">
                            <h1 className="Name">{profileInfo.personalInfo.Name}</h1>
                            <h4 className="tagline">{profileInfo.personalInfo.tagline}</h4>
                        </div>
                        <div className="qrCode"><img src="#" alt="qrCode" /></div>

                    </div>
                    <div className="videoAndQrcode">
                        <div className="videoCV">
                            <img src="#" alt="videoCV" />
                        </div>
                        <div className="profileImg">
                            <img src="#" alt="profileImg" />
                        </div>
                    </div>
                </div>
                <div className="aboutDiv">
                    <span>About</span>
                    <p className="aboutDescription">{rmFlag ? profileInfo.personalInfo.aboutText : profileInfo.personalInfo.aboutText.substring(0, 200)}</p><button className="rmBtn" onClick={handleClick}>{rmFlag ? "Read Less" : "..Read More"}</button>
                </div>
                <div>
                    <div className="sectionForActivities">
                        <div className="personalDiv">
                            <div>
                                <div className="personalSectionSelector">
                                    <div className="pdiv">
                                        <div className={`headingsForDiv ${changeDivFlag.PersonalInfo ? 'active' : null}`} onClick={PersonalInfoHandler}><span id="PersonalInfo">Personal Info</span></div>
                                        <div className={`headingsForDiv ${changeDivFlag.Skills ? 'active' : null}`} onClick={SkillsHandler}><span id="Education">Skills</span></div>
                                        <div className={`headingsForDiv ${changeDivFlag.Education ? 'active' : null}`} onClick={EducationHandler}><span id="Skills">Education</span></div>
                                        <div className={`headingsForDiv ${changeDivFlag.WorkExperience ? 'active' : null}`} onClick={WorkExperienceHandler}><span id="WorkExperience">Work Experience</span></div></div>
                                </div>
                            </div>
                            <div className="informationDiv">
                                <div className={`InfoDiv ${changeDivFlag.PersonalInfo ? 'activeDiv' : null}`} id="InfoDiv">
                                    <ul className="infoList">
                                        <form>
                                            <li><span>Name :</span><span className="infoSpan"><input type="text" placeholder="Name" className={`editInput ${editFlag ? `activeEdit` : null}`} />{profileInfo.personalInfo.Name}</span></li>
                                            <li><span>Email :</span><span className="infoSpan"><input type="email" placeholder="Email" className={`editInput ${editFlag ? `activeEdit` : null}`} />{profileInfo.personalInfo.Email}</span></li>
                                            <li><span>Phone :</span><span className="infoSpan"><input type="tel" placeholder="PhoneNumber" className={`editInput ${editFlag ? `activeEdit` : null}`} />{profileInfo.personalInfo.Phone}</span></li>
                                            <li><span>Gender :</span><span className="infoSpan"><input type="text" placeholder="Gender" className={`editInput ${editFlag ? `activeEdit` : null}`} /> {profileInfo.personalInfo.Gender}</span></li>
                                            <li><span>Date of Birth :</span><span className="infoSpan"><input type="date" placeholder="dd/mm/yyyy" className={`editInput ${editFlag ? `activeEdit` : null}`} />{profileInfo.personalInfo.DOB}</span></li>
                                            <button type={editFlag ? "submit" : "button"} className="editBtn" onClick={handleEdit}>{editFlag ? "Done" : "Edit"}</button>
                                        </form>
                                    </ul>
                                    <span className="SocialProfile">Social Profiles</span><div className="socialDiv"><div className="SocialLinks">
                                        <button className="Social" href={profileInfo.personalInfo.githubLink}>Github</button><button className="Social" href={profileInfo.personalInfo.linkedinLink}>LinkedIn</button><button className="Social" href={profileInfo.personalInfo.facebookLink}>Facebook</button></div><button className="addbtn">+</button></div>
                                </div>
                                <div className={`InfoDiv ${changeDivFlag.Skills ? 'activeDiv' : null}`}>
                                    {profileInfo.skills.map((skill)=>{
                                        return <InfoCard 
                                        heading={skill.skillName}
                                        description={skill.skillDescription} />
                                    })}
                                    <PostCard />
                                </div>
                                <div className={`InfoDiv ${changeDivFlag.Education ? 'activeDiv' : null}`}>
                                    <InfoCard />
                                    <InfoCard />
                                    <InfoCard />
                                    <PostCard />

                                </div>
                                <div className={`InfoDiv ${changeDivFlag.WorkExperience ? 'activeDiv' : null}`}>
                                    <InfoCard />
                                    <InfoCard />
                                    <PostCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
