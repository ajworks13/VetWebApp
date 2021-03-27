import React, { useState } from 'react'
import '../styles/HomePageStyles.css'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'
import dog from '../images/dog1.jpg'
import catProfile from '../images/catProfilePic.jpg'
import familyPic from '../images/familyPic.jpg'
import hospitalLogo from '../images/hospitalLogo.jpg'
import ImageUploader from 'react-images-upload';
import SignUp from './SignUp'



const maleClicked = () =>{
    let mainArea = document.getElementById('mainAreaId');
    if(document.getElementById('male').checked){
        mainArea.style.backgroundColor = '#3e90cc';
    }
}
const femaleClicked = () =>{
    let mainArea = document.getElementById('mainAreaId');
    if(document.getElementById('female').checked){
        mainArea.style.backgroundColor = '#b94f75';
    }
}


const sideBarForPetsList = () =>{
    const sbPets = document.querySelector('.sideBar');
    sbPets.style.marginLeft = '300px';
    sbPets.style.transition = 'all 1s';
    
}
const closeSideBarForPetsList = () => {
    const sbPets = document.querySelector('.sideBar');
    sbPets.style.marginLeft = '-250px';
    sbPets.style.transition = 'all 1s';
}


function HomePage({thePolicy}) {


    return (
        <div className='mainContainer'>
            <div className="banner">
                {/* log out through here */}
                <p>Ziggie</p>
                <div className="familyC">
                    <img 
                        className="familyPicImg" 
                        src={familyPic} 
                        alt="family" />
                </div>
                

                <div className="petPic">
                    <img 
                        className="catProfileImg" 
                        src={catProfile} 
                        alt="cat" />
                </div>
                <div>
                    <Popup
                        trigger={<button className="logout"> LOG OUT </button>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="logOutModal">
                            <div className="logOutModHeader"> Are you use you want to <b>log out?</b></div>
                            <div className="content">
                            </div>
                            <div className="logOutActions">
                            <Link to='/'>
                                <button
                                    className="yesSignOut"
                                    onClick={() => {
                                        
                                    }}
                                >
                                    Yes
                                </button>
                            </Link>
                
                                <button
                                    className="noSignOut"
                                    onClick={() => {
                                    console.log('modal closed ');
                                    close();
                                    }}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </div>
            </div>

            <div className="mainArea" id="mainAreaId">
                {/* include: family name, tag ID, microchip number, policy number, height, weight, length, weight, collar color, gender, breed.

                BTNs: Request Refill, Request Appointment, upcoming appointments [MAYBE for all of these btn's]
                
                GREEN default pet theme until male or female is chosen.
                
                individual pages for pet created.
                
                show each pet under other menus. */}
                <div className="petInfo">
                    <div className="familyName">
                        <p>Family Name:</p> <input type="text" className="fNameInput"/>
                    </div>
                    <div className="microchipNum">
                        <p>Micro Chip #:</p> <input type="text" className="microchipInput"/>
                    </div>
                    <div className="tagId">
                        <p>Tag ID #:</p> <input type="text" className="tagIdInput"/>
                    </div>
                    <div className="policyNum">
                        <p>Policy #:</p> <input type="text" className="policyNumInput" value={thePolicy}/>
                        <h2>{thePolicy}</h2>
                    </div>
                </div>

                <div className="additionalPetInfo">
                    <div className="petSpecifics">
                        {/* height, length, weight, colloar-color, gender, fur-color, breed,  */}
                        <div className="height">
                            <p className='subTitle'>PLEASE ENTER ADDITIONAL PET INFORMATION</p>
                            
                            <div className="subInfo">
                                <p className="heightAni">Height:</p>
                                <input type="text" className="heightInch"/><p>.</p>
                                <input type="text" className="heightCem"/>

                                <p className="weightAni">Weight:</p>
                                <input type="text" className="weightInch"/><p>.</p>
                                <input type="text" className="weightCem" />

                                <div className="subsubInfo">
                                    <p>Gender:</p>
                                    <form>
                                        <input type="radio" id="male" name="gender" value="male" onClick={maleClicked}/>
                                        <label className='maleC' for="male">Boy</label>
                                        <input type="radio" id="female" name="gender" value="female" onClick={femaleClicked}/>
                                        <label className='femaleC' for="female">Girl</label>
                                    </form>
                                    
                                    <form action="" className='textField'>
                                        <label htmlFor=""><b>You can write more interesting things about your pet here!</b></label>
                                        <textarea name="" id="" cols="40" rows="4" className="textA" placeholder='Ex. Sally likes to chew on my phone..'>

                                        </textarea>
                                    </form>
                                    <div className="hospitalLogo">
                                        <p>Selected Hospital </p>
                                        <img className='hospital' src={hospitalLogo} alt="Hospital Logo"/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="userButtons">
                        <button className="requestRefill">Request Refill</button>
                        <button className="requestAppointment">Request Appointment</button>
                        <button className="pastAppointments">Past Appointments</button>
                        <button className="emergancyCall">Emergancy Call</button>
                        
                    </div>
                </div>

                

            </div>
            
            <Link to='/Account'>
                <div className="accountBubble">
                    <p>Account</p>
                </div>
            </Link>

            <div className="inlistedPets" onClick={sideBarForPetsList}>
                <p>Your pet(s) list</p>
            </div>
            <div className="sideBar">
                <p onClick={closeSideBarForPetsList}>X</p>
                <p>Listed Pets</p>
                <hr/>


            </div>

            <Link to='/Settings'>
                <div className="settingsBubble">
                    <p>Settings</p>
                </div>
            </Link>
            
            <div className="hospitalInfoBubble">

            </div>
            <div className="addNewPet">
                <p>Add new Pet</p>
            </div>

        </div>
    )
}

export default HomePage;
