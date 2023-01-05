import React from "react"
import './Fretboard.scss'
import String from "../String/String"

const Fretboard = ({tuning, stringCount}: {tuning: number[], stringCount: number}) => {
    let noteList: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    let stringsList = tuning!.map((note, index) => {
    return  <String key={index} stringCount = {stringCount} startNote={noteList[note]}></String>
    })

    return (
    <div className="fretboardWrapper">
        <div className="fretboard">
            <div className="stringsBorderTop"></div>
            {stringsList}
            <div className="stringsBorderBottom"></div>
        </div>
    </div>
    )
}

export default Fretboard