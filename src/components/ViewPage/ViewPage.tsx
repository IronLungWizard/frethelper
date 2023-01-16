import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";
import { Link } from "react-router-dom";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const ViewPage = ({tuning, stringCount, setModalPresetVisible, instrumentLine}: {tuning: number[], stringCount: number, setModalPresetVisible: Function, instrumentLine: string;}) => {
  
    return (
        <>  
            <MobileNavbar setModalPresetVisible={setModalPresetVisible}></MobileNavbar>
            <div className="viewPageWrapper">
                <h1 className="pageHeader">Путеводитель по гитарному грифу</h1>
                <div className="presetSection">
                    <button className="modalButton" onClick={() => { setModalPresetVisible(true)}}>Сменить инструмент</button>
                    <h2 className="presetHeader">{instrumentLine}</h2>
                </div>
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <Link to='/edit'> <button  className="editButton">Настроить инструмент</button></Link>
                <span className="viewPageInstruction">-Для изменения строя или количества струн нажмите “Настроить инструмент”<br/>
                -Для смены пресета инструмента нажмите “Сменить инструмент”</span>
            </div>
        </>
    )
}

export default ViewPage