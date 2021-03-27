import React , { useState } from 'react'
import '../styles/SignUpStyles.css'
import cat from '../images/cat1.jpg'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'
import HomePage from './HomePage';


/*
    NOTES:
        Make the log in area a pop up instead of a whole new page.
*/



function SignUp() {

    const [policy, setPolicy] = useState('')
    
    const sendit = () => {
        setPolicy('')
    }

    return (
        <div className="container">
            <div className="signInArea">
                <div className="leftSide">
                    {/* <img src="cat1.jpg" alt="cat icon" style={{height:"300px", width:"300px"}}/> */}
                    {/* <div styles={{backgroundImage:`url(${cat})`}}>balls</div> */}
                    <img 
                        className="catImg" 
                        src={cat} 
                        alt="cat" />
                    <div className="shade1"></div>
                    <div className="shade2"></div>
                    <div className="shade3"></div>
                    <div className="currentMember">
                        <p>Already have an account? Log in here</p>
                        {/* <Link to='/LogIn'>
                            <button className="transpToLogin">Log in</button>
                        </Link> */}
                        {/* ====================================================================================== */}

                        <Popup
                            
                            trigger={<button className="button"> Log In </button>}
                            modal
                            nested
                        >
                            {close => (
                            <div className="modal">
                                {/* <button className="close" onClick={close}>
                                &times;
                                </button> */}
                                <div className="modHeader"> Welcome back! (Just log in devs)</div>
                                <div className="content">
                                {' '}
                                    <input type="text" className="activeEmail" placeholder='pets@howling.com'/>
                                    <input type="text" className="activeEmail" placeholder='****'/>
                                    <input type="text" className="activeEmail" placeholder='(1) of Pets Policy' />
                                    
                                </div>

                                <div className="actions">
                                <Link to='/HomePage'>
                                    <button
                                        className="buttonLog"
                                        // onClick={sendit}
                                    >
                                        LOGIN
                                    </button>
                                    {alert(policy)}
                                </Link>

                                    
                                    <button
                                        className="buttonCan"
                                        onClick={() => {
                                        console.log('modal closed ');
                                        close();
                                        }}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                            )}
                        </Popup>

                        {/* ====================================================================================== */}
                    </div>
                </div>
                {/* --------------------------------------------------------- */}
                <div className="rightSide">
                    <p>Lets get you and your pet started!</p>
                    <div className="signUpMember">
                        
                        <div className="fieldWords">
                            <p>First Name: <br/></p>
                            <p>Last Name: <br/></p>
                            <p>Pets Name: <br/></p>
                            <p>Email: <br/></p>
                            <p>Password: <br/></p>
                            <p>Confirm Password: <br/></p>
                        </div>
                        <div className="inputFields">
                            <input type="text" className="fName"/><br/>
                            <input type="text" className="lName"/><br/>
                            <input type="text" className="PetName"/><br/>
                            <input type="text" className="email"/><br/>
                            <input type="text" className="Password"/><br/>
                            <input type="text" className="passwordCon"/><br/>
                        </div>
                        
                        <div className='termsOfService'>
                            <input type="checkbox" className="checkBox"/> <br/>I agree to the terms of service
                        </div>

                        <button className="signingUpBtn">Sign Up</button>
                        
                    </div>
                        
                </div>
            </div>
        </div>

        
        
    )
}

export default SignUp
