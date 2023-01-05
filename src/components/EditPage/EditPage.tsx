import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState } from "react"

const EditPage = ({ tuning, stringCount, tuningCallback, switchModeCallback }: { tuning: number[], stringCount: number; tuningCallback: Function; switchModeCallback: Function }) => {
  const [editedTuning, setEditedTuning] = useState(tuning)
  const editedTuningCallback = (editedTuningData: number[]) => {
    setEditedTuning(editedTuningData)
  }
  const saveTuning = (editedTuningData: number[]) => {
    tuningCallback(editedTuningData)
  }
  return (
    <div className="editPageWrapper">
      <FretboardEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning} stringCount={stringCount}></FretboardEditor>
      <button className="saveButton" onClick={() => { saveTuning(editedTuning), switchModeCallback(false) }}>Сохранить изменения</button>
      <button className="exitButton" onClick={() => switchModeCallback(false)}>Отменить изменения</button>
    </div>
  )
}

export default EditPage