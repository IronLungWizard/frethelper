import React from "react"
import './FretboardEditor.scss'
import StringCountEditor from "../StringCountEditor/StringCountEditor"
import Fretboard from "../Fretboard/Fretboard"
import TuningEditor from "../TuningEditor/TuningEditor"
import { useEffect, useState } from "react"

const FretboardEditor = ({ editedTuning, stringCount, editedTuningCallback }: { editedTuning: number[], stringCount: number; editedTuningCallback: Function }) => {

const [isVertical, setIsVertical] = useState(false)

    useEffect(() => {
        
       if (window.screen.width < 1024) {
        setIsVertical(true)
       } else {
        setIsVertical(false)
       }console.log(isVertical)
      }, [window.screen.width]);

    return (
        <div className="fretboardEditorWrapper">

            <TuningEditor  editedTuningCallback={editedTuningCallback} editedTuning={editedTuning}></TuningEditor>
            <Fretboard tuning={editedTuning} stringCount={stringCount}></Fretboard>
            <StringCountEditor editedTuningCallback={editedTuningCallback} tuning={editedTuning}></StringCountEditor>
        </div>
    )
}

export default FretboardEditor