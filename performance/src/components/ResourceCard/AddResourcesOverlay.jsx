import React,{ useState } from 'react'

import Button from '../Button'

const AddResourcesOverlay = (props) => {

    // const { context } = props
    // const stopBubble = (event) => {
    //     event.nativeEvent.stopImmediatePropagation() //阻止冒泡
    // }

    const [inputText, setInputText] = useState('')

    const cancel = (event) => {
        setInputText('')
        // context.hide()
        // stopBubble(event)
    }

    const addResources = () => {
        if (inputText.trim() === '') return
        const resources = inputText.trim().split(',')
        props.addResources(resources).then(() => cancel())
    }

    return (
        <div style={{ backgroundColor: 'white', display: 'inline-block', width: '570px' }}>
            <div style={{ float: 'right' }}>
                <i onClick={cancel} className="cruise icon-close" style={{ fontSize: '16px', color: '#00B4CF', marginRight: '10px' }}></i>

            </div>
            <div style={{ padding: '10px' }}>
                <div>Separate multiple resource name with commas</div>
                <div style={{ margin: '5px 0' }}><input value={inputText} onChange={e => setInputText(e.target.value)} style={{ width: '100%' }} /></div>
                <div><Button onClick={addResources}>Add Resources</Button> &nbsp; &nbsp; <Button style={{ backgroundColor: '#435466' }} onClick={cancel}>Cancel</Button></div>
            </div>

        </div>
    )
}

export default AddResourcesOverlay