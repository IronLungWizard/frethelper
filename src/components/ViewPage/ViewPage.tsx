import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";
import { Link } from "react-router-dom";

const ViewPage = ({tuning, stringCount, setModalPresetVisible}: {tuning: number[], stringCount: number, setModalPresetVisible: Function;}) => {
  
    return (
            <div className="viewPageWrapper">
                <button className="modalButton" onClick={() => { setModalPresetVisible(true)}}>Сменить инструмент</button>
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <Link to='/edit'> <button  className="editButton">Настроить инструмент</button></Link>
            </div>
    )
}

export default ViewPage