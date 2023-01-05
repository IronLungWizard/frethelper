import React from "react"
import './EditPage.scss'
import FretboardEditor from "../FretboardEditor/FretboardEditor"
import { useState } from "react"

const EditPage = ({tuning, stringCount, tuningCallback, switchModeCallback}: {tuning: number[], stringCount: number; tuningCallback: Function; switchModeCallback: Function}) => {
    const [editedTuning, setEditedTTuning] = useState([0, 5, 10, 3, 7, 0])
    return (
            <div className="editPageWrapper">
              <FretboardEditor tuningCallback={tuningCallback} tuning={tuning} stringCount={stringCount}></FretboardEditor>
              <button className="saveButton" onClick={() => switchModeCallback(false)}>Сохранить изменения</button>
              <button className="exitButton" onClick={() => switchModeCallback(false)}>Отменить изменения</button>
            </div>
    )
}

export default EditPage