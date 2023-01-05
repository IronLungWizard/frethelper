import React from "react"
import './TuningList.scss'

const TuningList = ({tuning}: {tuning: number[]}) => {
    let noteList: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    let tuningList = tuning!.map((tuning) => {
        return  <div className={noteList[tuning]}>{noteList[tuning]}</div>
    })

    return (
        <div className="tuningList">{tuningList}</div>  
    )
}

export default TuningList