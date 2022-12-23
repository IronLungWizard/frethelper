import React from "react"
import './Fretboard.scss'
import String from "../String/String"

const Fretboard = () => {
    let tune: string[] = ['E', 'B', 'G','D', 'A', 'E'];
    let stringsList = tune!.map((note) => {
    return  <String startNote={note}></String>
    
    })
    let tuneList = tune!.map((tune) => {
        return  <div className={tune}>{tune}</div>
    })

    return (
        <div className="guitarWrapper">
            <div className="tuning">{tuneList}</div>
            <div className="fretsBorder"></div>
            <div className="stringsWrapper">
            
                <div className="fretWrapper">
                    <div className="stringsBorder"></div>
                    {stringsList}
                    <div className="stringsBorder"></div>
                </div>
            </div>
            <div className="fretsBorder"></div>
        </div>
    )
}

export default Fretboard