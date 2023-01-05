import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";

const ViewPage = ({tuning, stringCount, switchModeCallback}: {tuning: number[], stringCount: number; switchModeCallback: Function}) => {
  
    return (
            <div className="viewPageWrapper">
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <button className="editButton" onClick={() => switchModeCallback(true)}>Настроить инструмент</button>
            </div>
    )
}

export default ViewPage