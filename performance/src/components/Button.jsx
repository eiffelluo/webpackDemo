import React from 'react';
const Button = (props) => {
    const { children, style, ...restProps } = props
    return (
        <button  {...restProps}
            style={{ padding: '5px 15px', height: '30px', fontSize: '14px', color: 'white', backgroundColor: '#00BFCF', border: 'none', textDecoration: 'none', ...style }}>{props.children}</button>
    )
}

export default Button