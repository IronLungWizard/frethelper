import React from "react"
import './ViewPage.scss'
import RegularFretboard from "../RegularFretboard/RegularFretboard";
import { Link } from "react-router-dom";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import { useState } from "react";

const ViewPage = ({tuning, setModalPresetVisible, instrumentLine}: 
                  {tuning: number[], setModalPresetVisible: Function, instrumentLine: string}) => {
  
const [stringCount, setStringCount] = useState(15)                   
const infoText = `Для изменения строя или количества струн нажмите “Настроить инструмент”\n
        Для смены пресета инструмента нажмите “Сменить инструмент”
    `         
    return (
        <>  
            <MobileNavbar infoText={infoText} setModalPresetVisible={setModalPresetVisible}></MobileNavbar>
            <div className="viewPageWrapper">
                <h1 className="pageHeader">Frethelper - путеводитель по гитарному грифу</h1>
                <div className="presetSection">
                    <button className="modalButton" onClick={() => { setModalPresetVisible(true)}}>Сменить инструмент</button>
                    <h2 className="presetHeader">{instrumentLine}</h2>
                </div>
                <RegularFretboard tuning={tuning} stringCount={stringCount}></RegularFretboard>
                <div className="viewPageUnder">
                    <Link to='/edit'> <button onClick={() => {setStringCount(14)}} className="editButton">Настроить инструмент</button></Link>
                    <span className="viewPageInstruction">{infoText}</span>
                </div>
            </div>
        </>
    )
}

export default ViewPage