import React from "react"
import './Fretboard.scss'
import String from "../String/String"
import FretCounterDot from "../../../src/images/FretCounterDot.svg?url";
import FretCounterDotCoupleVertical from "../../../src/images/FretCounterDotCoupleVertical.svg?url";
import FretCounterDotCoupleHorizontal from "../../../src/images/FretCounterDotCoupleHorizontal.svg?url";

const Fretboard = ({tuning, stringCount}: {tuning: number[], stringCount: number}) => {
    let noteList: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];

    let stringsList = tuning!.map((note, index) => {
    return  <String key={index} stringCount = {stringCount} startNote={noteList[note]}></String>
    })

    let fretCountList: number[] = Array.from({length: stringCount}, (_, i) => i + 1);

    let fretCount = fretCountList!.map((fretCountList) => {
        if ((fretCountList % 2) && fretCountList != 1  && fretCountList != 13  && fretCountList != 11)
        {
            return  <div className="fretCountCell"><img className="fretCounterDot" src={FretCounterDot}></img></div>
        } else if (fretCountList == 12){
            return  <div className="fretCountCell">
                        <img className="fretCounterDotCoupleVertical" src={FretCounterDotCoupleVertical}></img>
                        <img className="fretCounterDotCoupleHorizontal" src={FretCounterDotCoupleHorizontal}></img>
                    </div>
        } else {
            return   <div className="fretCountCell"></div>
        }
    })
    return (
    <div className="fretboardWrapper">
        <div className="fretboard">
            <div className="fretCountPanel">
                {fretCount}
            </div> 
            <div className="stringsBorderTop"></div>
                {stringsList}
            <div className="stringsBorderBottom"></div>
       </div>  {/* <String key={1} stringCount = {15} startNote={noteList[1]}></String> */}
    </div>
    )
}

export default Fretboard