import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MobileNavbar from "../MobileNavbar/MobileNavbar"
import BottomPanel from "../BottomPanel/BottomPanel"
const EditPage = (
  { tuning, tuningCallback, instrumentLineDeleteCallback, setModalPresetVisible}: 
  { tuning: number[], tuningCallback: Function,  
    instrumentLineDeleteCallback: Function, setModalPresetVisible: Function}
  ) => {
  const [editedTuning, setEditedTuning] = useState(tuning)
  const editedTuningCallback = (editedTuningData: number[]) => {
    setEditedTuning(editedTuningData)
  }
  const saveTuning = (editedTuningData: number[]) => {
    tuningCallback(editedTuningData)
    instrumentLineDeleteCallback()
  }
  const [stringCount, setStringCount] = useState(14)  
  const infoText = `Для удаления или добавления струн, используйте кнопки - и +, находящиеся справа, соответственно.\n
        Для изменения настройки конкретной струны или смены тональности используйте кнопки со стрелками, находящиеся слева.\n
        Для сохранения настройи и выхода из режима редактирования нажмите “Сохранить изменения”
        `
  useEffect(() => {
    if (localStorage.getItem("tuning")) {
      setEditedTuning(JSON.parse(localStorage.getItem("tuning") || '{}'))
    }
  }, [tuning]);
  return (
    <>
    <MobileNavbar infoText={infoText} setModalPresetVisible={setModalPresetVisible}></MobileNavbar>
    <div className="editPageWrapper">
      <h1 className="pageHeader">Frethelper - путеводитель по гитарному грифу</h1>
      <div className="presetSection">
        <h2 className="redactingHeader">Редактирование...</h2>
      </div>
       <FretboardEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning} stringCount={stringCount}></FretboardEditor>  
      <div className="editPageUnder">
        <div className="editPageButtonsContainer">
          <Link to='/frethelper'><button className="saveButton" onClick={() => {saveTuning(editedTuning)}}>Сохранить изменения</button></Link>
          <Link to='/frethelper'><button className="exitButton">Отменить изменения</button></Link>
        </div>
        <span className="editPageInstruction">{infoText}</span>
      </div>
    </div>
    <BottomPanel editedTuning={editedTuning} saveTuning={saveTuning}></BottomPanel>
    </>
  )
}

export default EditPage