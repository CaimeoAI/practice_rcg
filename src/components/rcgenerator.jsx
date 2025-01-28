import { useEffect, useState } from "react"
import "../css/rcgenerator.css"

export default function RandomColorGenerator() {

    const[selection, setSelection] = useState('hex')
    const[colorCode, setColorCode] = useState('#ffffff')

    function handleSelection(selector) {
        setSelection(selector)
    }

    function generationUtility(length) {
        return Math.floor(Math.random()*length)    
    }

    function generateColor(selector) {

        console.log(selector)
        if (selector === 'hex') {
            const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexColor = "#";

            for (let i = 0; i < 6; i++) {
                hexColor += hex[generationUtility(hex.length)]
            }
            console.log(hexColor)
            setColorCode(hexColor)
        } else {
            const r = generationUtility(256)
            const g = generationUtility(256)
            const b = generationUtility(256)
            setColorCode("rgb("+r+","+g+","+b+")")
        }
    }

    useEffect(() => {
        if (selection === 'rgb') generateColor('rgb');
        else generateColor('hex')
    }, [selection])

    return (
        <div className="container" style={{
            background: colorCode
        }}>
            <div className="button-container">
                <button onClick={() => handleSelection('hex')}>HEX Color Code</button>
                <button onClick={() => handleSelection('rgb')}>RGB Color Code</button>
                <button 
                    onClick={() => selection === 'hex' ? generateColor('hex') : generateColor('rgb')}>
                    Generate Random Color
                </button>
            </div>
            <div className="text-wrapper">
                {
                    selection === 'hex' ?
                    (<div className="text-container">
                        <div className="text">HEX Color Code</div>
                        <div className="text">{colorCode}</div>
                    </div>)
                    :
                    (<div className="text-container">
                        <div className="text">RGB Color Code</div>
                        <div className="text">{colorCode}</div>
                    </div>)
                }
            </div>
        </div>
    )
}