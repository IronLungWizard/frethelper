import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";
import { Link } from "react-router-dom";

const ViewPage = ({tuning, stringCount}: {tuning: number[], stringCount: number;}) => {
  
    return (
            <div className="viewPageWrapper">
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <Link to='/edit'> <button  className="editButton">Настроить инструмент</button></Link>
            </div>
    )
}

export default ViewPage