import React from 'react'
import '../styles/SettingsStyles.css'
import catProfilePic from '../images/catProfilePic.jpg'
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup'



// add Log out btn, third party ads, pharmacy changes, credit/debit cards used in pet stores, be able to add pet stores the owner goes shopping to, 
const closePaymentInfo = () => {
    document.querySelector('.cardInfo').style.display = 'none'
    
}

function Settings() {
    return (
        <div>
            <div className="petProfiles2">
                <Link to='/HomePage'>
                    <img className='catProfile2' src={catProfilePic} alt=""/>
                </Link>
            </div>

            <div className="settingSection">
                <Link to='/'>
                    <div className="logOutOfSettings">
                        <p>Log Out</p>
                    </div>
                </Link>


                <div className="secondSettingSection">
                    <div className="payingCards">
                        <Popup
                            trigger={<div className='cardTrigger'>Your Personal Cards</div>}
                            modal
                            nested
                            >

                            <div className="cardInfo">
                                <p>Payment Information</p>
                                <p onClick={closePaymentInfo}>X</p>
                                <div className="cardinfo2">
                                    <input type="text" className="firstCardName" placeholder='Full Name on the card'/>
                                    <input type="text" className="cardNumber" placeholder='Card #'/>
                                    <input type="text" className="cardExpDate" placeholder='Expiration Date'/>
                                </div>
                            </div>
                        </Popup>
                    </div>
                    <div className="petStores">
                        <Popup
                            trigger={<div className='cardTrigger2'>Stores that you purchased from</div>}
                            modal
                            nested
                            >

                            <div className="cardInfo">
                                <p>Payment Information</p>
                                <p onClick={closePaymentInfo}>X</p>
                                <div className="cardinfo2">
                                    
                                </div>
                            </div>
                        </Popup>
                    </div>
                    <div className="pharmacyLocation">
                        <Popup
                            trigger={<div className='cardTrigger3'>Select Default Pharmacy</div>}
                            modal
                            nested
                            >

                            <div className="cardInfo">
                                <p>Payment Information</p>
                                <p onClick={closePaymentInfo}>X</p>
                                <div className="cardinfo2">
                                    
                                </div>
                            </div>
                        </Popup>
                    </div>
                    <div className="petShoppingLocations">
                        <Popup
                            trigger={<div className='cardTrigger4'>Stores you have shopped at</div>}
                            modal
                            nested
                            >

                            <div className="cardInfo">
                                <p>Payment Information</p>
                                <p onClick={closePaymentInfo}>X</p>
                                <div className="cardinfo2">
                                    
                                </div>
                            </div>
                        </Popup>
                    </div>



                    {/* <div className="petStores">
                        <p>Stores that your purchased from</p>
                    </div>
                    <div className="pharmacyLocation">
                        <p>Select Default Pharmacy</p>
                    </div>
                    <div className="petShoppingLocations">
                        <p>Stores you have shopped at</p>
                    </div> */}
                </div>


            </div>
        </div>
    )
}

export default Settings
