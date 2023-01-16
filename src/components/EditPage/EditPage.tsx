import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MobileNavbar from "../MobileNavbar/MobileNavbar"

const EditPage = (
  { tuning, stringCount, tuningCallback, setModalPresetVisible, instrumentLine, instrumentLineDeleteCallback}: 
  { tuning: number[], stringCount: number; tuningCallback: Function, setModalPresetVisible: Function, instrumentLine: string, instrumentLineDeleteCallback: Function;}
  ) => {
  const [editedTuning, setEditedTuning] = useState(tuning)
  const editedTuningCallback = (editedTuningData: number[]) => {
    setEditedTuning(editedTuningData)
  }
  const saveTuning = (editedTuningData: number[]) => {
    tuningCallback(editedTuningData)
    instrumentLineDeleteCallback()
  }
  useEffect(() => {
    if (localStorage.getItem("tuning")) {
      setEditedTuning(JSON.parse(localStorage.getItem("tuning") || '{}'))
    }
  }, [tuning]);
  return (
    <>
    <MobileNavbar setModalPresetVisible={setModalPresetVisible}></MobileNavbar>
    <div className="editPageWrapper">
      <h1 className="pageHeader">Путеводитель по гитарному грифу</h1>
      <div className="presetSection">
        <button className="modalButton" onClick={() => {setModalPresetVisible(true)}}>Сменить инструмент</button>
        <h2 className="presetHeader">{instrumentLine}</h2>
      </div>
      <FretboardEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning} stringCount={stringCount}></FretboardEditor>
      <div>
        <Link to='/'><button className="saveButton" onClick={() => { saveTuning(editedTuning)}}>Сохранить изменения</button></Link>
        <Link to='/'><button className="exitButton">Отменить изменения</button></Link>
      </div>
      <span className="editPageInstruction">-Для удаления или добавления струн, используйте кнопки - и +, находящиеся справа, соответственно.<br/>
        -Для изменения настройки конкретной струны или смены тональности используйте кнопки со стрелками, находящиеся слева.<br/>
        -Для сохранения настройи и выхода из режима редактирования нажмите “Сохранить изменения”
      </span>
    </div>
    </>
  )
}

export default EditPage