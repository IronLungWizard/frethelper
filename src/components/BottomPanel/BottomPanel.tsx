import React from "react"
import './BottomPanel.scss'
import { Link } from "react-router-dom"

const BottomPanel = ({editedTuning, saveTuning}: {editedTuning: number[], saveTuning: Function}) => {

    return (
    <div className="bottomPanelWrapper">
          <Link to='/'><button className="saveButton" onClick={() => {saveTuning(editedTuning)}}>Сохранить изменения</button></Link>
          <Link to='/'><button className="exitButton">Отменить изменения</button></Link>
    </div>
    )
}

export default BottomPanel