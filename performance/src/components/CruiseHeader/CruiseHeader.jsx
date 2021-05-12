import React from 'react';
import './CruiseHeader.css'
import logo from '../../assets/logo/logo.svg'
import avatar from '../../assets/avatar/avatar.jpeg'


const CruiseHeader = () => {



    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={logo} style={{ width: '70px' }} alt="logo" />
            </div>
            <div className="avatar-container">
                <img src={avatar}  className="avatar-img"  alt="avatar" />
            </div>

        </div>
    )
}

export default CruiseHeader