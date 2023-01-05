import React from "react"
import './FretboardEditor.scss'
import StringCountEditor from "../StringCountEditor/StringCountEditor"
import Fretboard from "../Fretboard/Fretboard"
import TuningEditor from "../TuningEditor/TuningEditor"

const FretboardEditor = ({tuning, stringCount, tuningCallback}: {tuning: number[], stringCount: number; tuningCallback: Function}) => {
    return (
    <div className="fretboardEditorWrapper">
       <TuningEditor tuningCallback={tuningCallback} tuning={tuning}></TuningEditor>
       <Fretboard tuning={tuning} stringCount={stringCount}></Fretboard>
       <StringCountEditor tuningCallback={tuningCallback} tuning={tuning}></StringCountEditor>
    </div>
    )
}

export default FretboardEditor