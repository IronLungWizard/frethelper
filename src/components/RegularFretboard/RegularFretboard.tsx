import React from "react"
import './RegularFretboard.scss'
import TuningList from "../TuningList/TuningList"
import Fretboard from "../Fretboard/Fretboard"

const RegularFretboard = ({tuning, stringCount}: {tuning: number[], stringCount: number}) => {
  
    return (
            <div className="regularFretboardWrapper">
                <TuningList tuning={tuning}></TuningList>
                <Fretboard tuning={tuning} stringCount={stringCount}></Fretboard>
            </div>
    )
}

export default RegularFretboard