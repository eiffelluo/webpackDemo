import "./style.css"
import '../../assets/fontIcons/fonts.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Tabs = (props) => {


    const [currentIndex, setCurrentIndex] = useState(0)


    const check_title_index = (index) => {
        return index === currentIndex ? "tab_title active" : "tab_title"
    }

    const check_item_index = (index) => {
        return index === currentIndex ? "tab_item show" : "tab_item"
    }

    return (
        <div>
            { /* 动态生成Tab导航 */}
            <div className="tab-bar-container">
                <div className="tab-title-container">
                    {
                        React.Children.map(props.children, (element, index) => {
                            return (
                                <div  key={index} onClick={() => { setCurrentIndex(index) }} className={check_title_index(index)}>{element.props.tab}</div>
                            )
                        })
                    }
                </div>
                <div className="tab-search-container">
                    <div className="search">
                        <i className="cruise icon-search" style={{ fontSize: '20px', color: '#999999', marginRight: '10px' }}></i>
                        <input type="search" style={{
                            padding: 0,
                            border: 'none',
                            outline: 'none',
                            width: '100%',
                            height: '40px',
                            backgroundColor: '#F3F3F3'
                        }} />
                    </div>
                </div>
                <div className="right-logo-container">
                    <i className="cruise icon-th-card" style={{ fontSize: '20px', color: '#4A4A4A', marginRight: '10px' }}></i>
                    <i className="cruise icon-th-list" style={{ fontSize: '20px', color: '#00B4CF', marginRight: '10px' }}></i>
                </div>

            </div>
            { /* Tab内容区域 */}
            <div className="tab_item_wrap">
                {
                    React.Children.map(props.children, (element, index) => {
                        return (
                            <div  key={index} className={check_item_index(index)}>{element}</div>
                        )
                    })
                }
            </div>
        </div>
    )

}

const TabPane = (props) => {
    return (
        <div style={{marginTop:'20px'}}>
            {props.children}
        </div>
    )

}

TabPane.propTypes = {
    tab: PropTypes.string,
    key: PropTypes.string,
}

Tabs.TabPane = TabPane
export default Tabs
