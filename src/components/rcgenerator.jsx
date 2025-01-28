import { useState } from "react"
import "../css/rcgenerator.css"

export default function RandomColorGenerator() {

    const[selection, setSelection] = useState('hex')
    const[colorCode, setColorCode] = useState('#000000')

    function handleSelection(selector) {
        setSelection(selector)
    }

    function generateColor(selector) {
        if (selector === 'hex') {
        } else if (selector === 'rgb') {

        } else {
            null
        }
    }

    return (
        <div className="container" style={{
            background: {colorCode}
        }}>
            <div className="button-container">
                <button onClick={() => handleSelection('hex')}>HEX Color Code</button>
                <button onClick={() => handleSelection('rgb')}>RGB Color Code</button>
                <button 
                    onClick={selection === 'hex' ? generateColor('hex') : generateColor('rgb')}>
                    Generate Random Color
                </button>
            </div>
        </div>
    )
}