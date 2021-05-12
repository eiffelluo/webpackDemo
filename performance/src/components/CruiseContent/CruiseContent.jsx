import React, {useEffect, useState} from 'react'
import Card from '../../components/Card/Card'
import Tabs from '../../components/Tabs/Tabs'
import ResourceCard from '../../components/ResourceCard/ResourceCard'

import './CruiseContent.css'
import '../../assets/fontIcons/fonts.css'

const {TabPane} = Tabs;

const CruiseContent = () => {

    const [agents, setAgents] = useState([])
    useEffect(() => {
        fetch('/agents').then(res => res.json()).then(data => setAgents(data))
    }, [])

    return (
        <div className="content-container">
            <div className="card-container">
                <Card name="Building" num={3} bgColor="#FFB900" iconName="cruise icon-cog" isRotate={true}/>
                <Card name="Idle" num={5} bgColor="#7FBC39" iconName="cruise icon-coffee" isRotate={false}/>
                <div className='grid-card'>
                    <div className='cell' style={{fontSize: '12px'}}>ALL</div>
                    <div className='cell' style={{fontSize: '12px'}}>PHYSICAL</div>
                    <div className='cell' style={{fontSize: '12px'}}>VIRTUAL</div>

                    <div className='cell' style={{fontSize: '20px'}}>8</div>
                    <div className='cell' style={{fontSize: '20px'}}>4</div>
                    <div className='cell' style={{fontSize: '20px'}}>4</div>
                </div>
            </div>
            <div className="tab-container">
                <Tabs>
                    <TabPane tab="All">

                        {agents.map((item, index) => (
                            <ResourceCard {...item} key={index}/>
                        ))}
                    </TabPane>
                    <TabPane tab="Physical">
                        {agents.filter(item => item.type === 'physical').map((item, index) => (
                            <ResourceCard {...item} key={index}/>
                        ))}
                    </TabPane>
                    <TabPane tab="Virtual">
                        {agents.filter(item => item.type === 'virtual').map((item, index) => (
                            <ResourceCard {...item} key={index}/>
                        ))}
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default CruiseContent