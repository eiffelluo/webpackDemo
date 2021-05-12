import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'
const Card = (props) => {

    return (
        <div className="card" style={{backgroundColor:props.bgColor}}>
            <div className="status-text">{props.name}</div>
            <div className="number-text">{props.num}</div>
            <i className={`${props.iconName} ${props.isRotate?'my-animation':''}`} style={{ fontSize: '144px', opacity: '0.2',color:'white' }}></i>
        </div>
    )
}

Card.propTypes = {
    bgColor:PropTypes.string,
    name:PropTypes.string,
    num:PropTypes.number,
    iconName:PropTypes.string,
    isRotate:PropTypes.bool
}

export default Card