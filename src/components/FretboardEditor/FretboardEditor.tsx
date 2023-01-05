import React from "react"
import './FretboardEditor.scss'
import StringCountEditor from "../StringCountEditor/StringCountEditor"
import Fretboard from "../Fretboard/Fretboard"
import TuningEditor from "../TuningEditor/TuningEditor"

const FretboardEditor = ({ editedTuning, stringCount, editedTuningCallback }: { editedTuning: number[], stringCount: number; editedTuningCallback: Function }) => {
    return (
        <div className="fretboardEditorWrapper">
            <TuningEditor editedTuningCallback={editedTuningCallback} editedTuning={editedTuning}></TuningEditor>
            <Fretboard tuning={editedTuning} stringCount={stringCount}></Fretboard>
            <StringCountEditor editedTuningCallback={editedTuningCallback} tuning={editedTuning}></StringCountEditor>
        </div>
    )
}

export default FretboardEditor