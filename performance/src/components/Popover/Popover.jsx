import React from 'react'
import ReactDOM from "react-dom";
import './Popover.css'
import Popup from './Popup'

class Popover extends React.Component {
    state={visable:false}
    triggerRef = React.createRef(null);
    popupRef = React.createRef(null)
    divRef = React.createRef(null)

    documentClick = (e) => {
        console.log('documentClick')
        if (this.state.visable) {
            const target = e.target
            const triggerNode = this.triggerRef.current
            const popupNode = this.popupRef.current
            if (!triggerNode.contains(target) && !popupNode.contains(target)) {
                this.setState({visable:false})
            }
        } 
    }

    onClick = (e)=> {
        console.log('onClick')
       this.setState({visable: !this.state.visable})
    }


    componentDidUpdate(){
        // document.addEventListener('click', this.documentClick)
    }

    componentDidMount(){
         document.addEventListener('click', this.documentClick)
    }

    render(){
        
    
        const newChildProps = { ref: this.triggerRef ,onClick:this.onClick}
    
        const trigger = React.cloneElement(this.props.children, newChildProps);
        return (
            < >
                {trigger}
    
                {
                    this.state.visable && ReactDOM.createPortal((<div ref={this.popupRef} >
                        {this.props.content}
                    </div>), document.body)
                }
               
            </>
        )
    }

 

}

export default Popover