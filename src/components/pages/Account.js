import React from 'react'
import '../styles/AccountStyles.css'
import catProfilePic from '../images/catProfilePic.jpg'
import { Link } from "react-router-dom";

// be able to make changes to Email address, Password, emergancy doctors number, hospital, 

function Account() {
    return (
        <div>
            <div className="accountMainArea">

                <div className="petProfiles">
                    <Link to='/HomePage'>
                        <img className='catProfile' src={catProfilePic} alt=""/>
                    </Link>
                </div>

                <div className="settingsArea">
                    <div className="changeEmail">
                        <p>Change Email</p>
                    </div>

                    <div className="changePW">
                        <p>Change Password</p>
                    </div>

                    <div className="changeEmerNum">
                        <p>Change Emergancy Phone Number</p>
                    </div>

                    <div className="changeHospital">
                        <p>Change Hospital</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
