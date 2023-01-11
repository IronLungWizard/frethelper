import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

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
    <div className="editPageWrapper">
      <div className="presetSection">
        <button className="modalButton" onClick={() => { setModalPresetVisible(true)}}>Сменить инструмент</button>
        <h2 className="presetHeader">{instrumentLine}</h2>
      </div>
      <FretboardEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning} stringCount={stringCount}></FretboardEditor>
      <Link to='/'><button className="saveButton" onClick={() => { saveTuning(editedTuning)}}>Сохранить изменения</button></Link>
      <Link to='/'><button className="exitButton">Отменить изменения</button></Link>
    </div>
  )
}

export default EditPage