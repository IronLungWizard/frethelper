import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";
import { Link } from "react-router-dom";

const ViewPage = ({tuning, stringCount, setModalPresetVisible, instrumentLine}: {tuning: number[], stringCount: number, setModalPresetVisible: Function, instrumentLine: string;}) => {
  
    return (
            <div className="viewPageWrapper">
                <div className="presetSection">
                    <button className="modalButton" onClick={() => { setModalPresetVisible(true)}}>Сменить инструмент</button>
                    <h2 className="presetHeader">{instrumentLine}</h2>
                </div>
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <Link to='/edit'> <button  className="editButton">Настроить инструмент</button></Link>
            </div>
    )
}

export default ViewPage