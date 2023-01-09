import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const EditPage = ({ tuning, stringCount, tuningCallback}: { tuning: number[], stringCount: number; tuningCallback: Function;}) => {
  const [editedTuning, setEditedTuning] = useState(tuning)
  const editedTuningCallback = (editedTuningData: number[]) => {
    setEditedTuning(editedTuningData)
  }
  const saveTuning = (editedTuningData: number[]) => {
    tuningCallback(editedTuningData)
  }
  useEffect(() => {
    if (localStorage.getItem("tuning")) {
      setEditedTuning(JSON.parse(localStorage.getItem("tuning") || '{}'))
    }
  }, []);
  return (
    <div className="editPageWrapper">
      <FretboardEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning} stringCount={stringCount}></FretboardEditor>
      <Link to='/'><button className="saveButton" onClick={() => { saveTuning(editedTuning)}}>Сохранить изменения</button></Link>
      <Link to='/'><button className="exitButton">Отменить изменения</button></Link>
    </div>
  )
}

export default EditPage