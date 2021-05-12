import React from 'react';
import './CruiseSider.css'
import '../../assets/fontIcons/fonts.css'


const CruiseSider = () => {



    return (
        <div className="sider-container">
            <div className="menu">
                <div className="menu-item">
                    <div className="menu-item-container">
                        <i className="cruise icon-dashboard" style={{ fontSize: '20px' }}></i><span style={{ marginLeft: '20px' }}>DASHBORD</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-container">
                        <i className="cruise icon-sitemap" style={{ fontSize: '20px' }}></i><span style={{ marginLeft: '20px' }}>AGENT</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-container">
                        <i className="cruise icon-boat" style={{ fontSize: '20px' }}></i><span style={{ marginLeft: '20px' }}>MY CRUISE</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="menu-item-container">
                        <i className="cruise icon-life-bouy" style={{ fontSize: '20px' }}></i><span style={{ marginLeft: '20px' }}>HELP</span>
                    </div>
                </div>
            </div>
            <div className="sider-history">
                <div className="history-title">History</div>
                <ul style={{paddingLeft: '15px'}}>
                    <li className="history-item">bjstdmngbgr02/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr03/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr04/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr05/Acceptance-test......</li>
                    <li className="history-item">bjstdmngbgr06/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr07/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr08/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr09/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr11/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr12/Acceptance-test</li>
                    <li className="history-item">bjstdmngbgr13/Acceptance-test</li>
                </ul>

            </div>
        </div>
    )
}

export default CruiseSider