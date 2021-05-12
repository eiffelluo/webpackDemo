import React,{ useState, useEffect } from 'react'
import remove from '../../utils'

// import OverlayTrigger from 'react-overlay-trigger'

import AddResourcesOverlay from './AddResourcesOverlay'
import Popover from '../Popover/Popover'
import Tip from '../tips/index'

import './ResourceCard.css'

import centosPng from '../../assets/osIcons/cent_os.png'
import debinPng from '../../assets/osIcons/debin.png'
import susePng from '../../assets/osIcons/suse.png'
import ubuntuPng from '../../assets/osIcons/ubuntu.png'
import windowPng from '../../assets/osIcons/windows.png'



const osPngMap = {
    windows: windowPng,
    ubuntu: ubuntuPng,
    debian: debinPng,
    suse: susePng,
    centos: centosPng,
}


const ResourceCard = (props) => {

    const [resources, setResources] = useState([])
    useEffect(() => {
        setResources(props.resources)
    }, [])


    const updateAgent = (agent) => {
        return fetch(`/agents/${agent.id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(agent)
        })

    }

    const addResources = (items) => {
        const newResources = [...resources, ...items]
        const newAgent = { ...props, resources: newResources }
        return updateAgent(newAgent).then(res => setResources(newResources)).catch(error => console.error('delete error'))
    }

    const handleDeleteResource = (index) => {
        console.log('handleDeleteResource')
        const newResources = remove(resources, index)
        const newAgent = { ...props, resources: newResources }
        return updateAgent(newAgent).then(res => setResources(newResources)).catch(error => console.error('delete error'))

    }

    return (
        <div className="resource-card-container">
            <div className="resource-card-left-container">
                <img alt="系统图标" src={osPngMap[props.os]} style={{ width: '80px', height: '80px' }}></img>
            </div>
            <div className="resource-card-right-container">
                <div className="resource-card-sub-top-container">
                    <i className="cruise icon-desktop" style={{ fontSize: '16px', color: '#A2A2A2', marginRight: '10px' }}></i>
                    <div style={{ color: '#00B4CF', fontSize: '14px', marginRight: '20px' }}>{props.name}</div>
                    <div style={{ backgroundColor: props.status === 'building' ? '#FF9A2A' : '#7FBC39', color: 'white', marginRight: '20px', padding: '1px 10px' }}>{props.status}</div>
                    <i className="cruise icon-info" style={{ fontSize: '16px', color: '#A2A2A2', marginRight: '10px' }}></i>
                    <div style={{ marginRight: '10px' }}>{props.ip}</div>
                    <i className="cruise icon-folder" style={{ fontSize: '16px', color: '#A2A2A2', marginRight: '10px' }}></i>
                    <div >{props.location}</div>

                </div>
                <div className="resource-card-sub-bottom-container">
                    <div className="left-container">
                        <div style={{ backgroundColor: '#00BFCF', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>
                            <Popover content={  <AddResourcesOverlay   />}>
                                <i className="cruise icon-plus" style={{ fontSize: '18px', color: 'white', }}></i>
                            </Popover>
                            {/* <Tip title={(context) => <AddResourcesOverlay context={context} addResources={addResources} />} placement="bottom"  >
                                <div className="plus-icon-container">
                                    <i className="cruise icon-plus" style={{ fontSize: '18px', color: 'white', }}></i>
                                </div>
                            </Tip> */}

                        </div>
                        <div className="resource-container">
                            {resources.map((item, index) => (
                                <div key={index} style={{ backgroundColor: '#EFEFEF', display: 'flex', alignItems: 'center', padding: '5px 8px', marginRight: '10px' }}>
                                    <div style={{ marginRight: '10px' }}>{item}</div>
                                    <i onClick={() => handleDeleteResource(index)} className="cruise icon-trash" style={{ fontSize: '16px', }}></i>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button style={{ padding: '5px 15px', height: '30px', fontSize: '14px', color: 'white', backgroundColor: '#00BFCF', border: 'none', textDecoration: 'none' }} >
                            <i className="cruise icon-deny" style={{ fontSize: '14px', }}></i> Deny
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourceCard