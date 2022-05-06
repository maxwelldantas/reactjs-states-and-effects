import React, { useEffect, useState } from 'react'
import '../Ifoodcounter/Ifoodcounter.css'

export default function Ifoodcounter() {

    const [value, setValue] = useState(1)
    const [buttonStyle, setButtonStyle] = useState("button-red")

    useEffect(() => {
        console.log(`o estilo do botão atual é: ${buttonStyle}`)
    }, [buttonStyle])

    function down() {

        if (value <= 1) {
            //mudar cor do botão
            setButtonStyle("button-red-deactive")
        }

        if (value > 0) {
            setValue(value - 1)
        }
    }

    function up() {
        setValue(value + 1)
        setButtonStyle("button-red")
    }

    return (
        <div className=''>
            <button onClick={down} className={buttonStyle}>-</button>
            <p>{value}</p>
            <button onClick={up} className={"button-red"}>+</button>
            <button id='moeda'></button>
        </div>
    )
}
