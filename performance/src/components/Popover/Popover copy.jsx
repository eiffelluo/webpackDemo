import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from "react-dom";
import './Popover.css'
import Popup from './Popup'

const Popover = (props) => {
    const [visable, setVisable] = useState(false)


    const documentClick = (e) => {
        console.log('triggerRef', triggerRef)
        console.log('popupRef', popupRef)
        if (visable) {
            const target = e.target
            if (!triggerRef.current.contains(target) && !popupRef.current.contains(target)) {
                setVisable(false)
            }
        } 
    }

    const onClick = (e)=> {
        console.log('onClick')
        setVisable(!visable)
    }

    useEffect(() => {
        
        document.addEventListener('click', documentClick)
        document.addEventListener('click', onClick)
    }, [visable])

    const triggerRef = useRef(null);
    const popupRef = useRef(null)

    const newChildProps = { ref: triggerRef ,onClick}

    const trigger = React.cloneElement(props.children, newChildProps);

    return (
        < >
            {trigger}

            {
                visable && ReactDOM.createPortal((<Popup ref={popupRef} >
                    {props.content}
                </Popup>), document.body)
            }

        </>
    )

}

export default Popover