import React from "react"
import './Fretboard.scss'
import String from "../String/String"
import { useEffect } from "react" 
import { useState } from "react"

const Fretboard = () => {
    const [isEditEnabled, setIsEditEnabled] = useState(false)
    let notes: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    const [tune, setTune] = useState([0, 5, 10, 3, 7, 0])
    const [stringCount, setStringCount] = useState(15)
 

    let stringsList = tune!.map((note) => {
    return  <String stringCount = {stringCount} startNote={notes[note]}></String>
    })

    let tuneList = tune!.map((tune) => {
        return  <div className={notes[tune]}>{notes[tune]}</div>
    })

    function stringTuneDownHandler(index: number, tuneNote: number) {
        setTune(existingItems => {
            if (existingItems[index] == 11)
            {
                return [
                    ...existingItems.slice(0, index),
                    0,
                    ...existingItems.slice(index + 1), 
                ]
            }
            else {
                return [
                    ...existingItems.slice(0, index),
                    existingItems[index] + 1,
                    ...existingItems.slice(index + 1), 
                ]
            }
        })
    }

    function stringTuneUpHandler(index: number, tuneNote: number) {
        setTune(existingItems => {
            if (existingItems[index] == 0)
            {
                return [
                    ...existingItems.slice(0, index),
                    11,
                    ...existingItems.slice(index + 1), 
                    
                ]
                
            }
            else {
                return [
                    ...existingItems.slice(0, index),
                    existingItems[index] - 1,
                    ...existingItems.slice(index + 1), 
                ]
            }
            
        })
    }

     function tuneDownHandler(tune: number[]) {
        setTune(
      tune.map(function(item) {
            if (item == 11) 
            {
                return 0;
            }
            else 
            {
                return item + 1;
            }
            
          }))
     }

     function tuneUpHandler(tune: number[]) {
        setTune(
      tune.map(function(item) {
            if (item == 0) 
            {
                return 11;
            }
            else 
            {
                return item - 1;
            }
            
          }))
     }
     
     function stringDeleteHandler (index: number)
        {
            setTune(existingItems => {
                    return [
                        ...existingItems.slice(0, index),
                        ...existingItems.slice(index + 1), 
                        
                    ]
                    
               }
                
            )
        } 

    function addStringTopHandler (tune: number[])
        {
            setTune(existingItems => {
                    return [
                        0,
                        ...existingItems
                    ]
               }
                
            )
        }   

    function addStringBottomHandler (tune: number[])
        {
            setTune(existingItems => {
                    return [ 
                        ...existingItems,
                        0
                    ]
               }
                
            )
        }  
    let noteEditor = tune!.map((tuneNote, index) => {
        return  <div key = {index} className={notes[tuneNote]}>
                    <button onClick = {() => stringTuneDownHandler(index, tuneNote)} className="buttonStringTuningLower"></button>
                    <div className={notes[tuneNote]}>{notes[tuneNote]}</div>
                    <button onClick = {() => stringTuneUpHandler(index, tuneNote)}  className="buttonStringTuningHigher"></button>
                </div>
    })

    let stringsDelete = tune!.map((tuneNote, index) => {
        return  <button className="deleteStringButton" key = {index} onClick = {() => stringDeleteHandler(index)}></button>
    })



    return (
    <div className="fretboardWrapper">
        <div className="fretboard">
            <div className="guitarWrapper">
                {!isEditEnabled 
                ? 
                    <div className="tuning">{tuneList}</div> 
                : 
                    <div className="tuningEditor">
                        <div className="tuningWholeEditor">
                            <button onClick = {() => tuneDownHandler(tune)}  className="buttonWholeTuningLower"></button>
                            <div className="tuningHeader">Тональность</div>
                            <button onClick = {() => tuneUpHandler(tune)}   className="buttonWholeTuningHigher"></button> 
                        </div>
                        {noteEditor}
                    </div>
                }
                <div className="stringsWrapper">
                    <div className="fretWrapper">
                        <div className="stringsBorderTop"></div>
                        {stringsList}
                        <div className="stringsBorderBottom"></div>
                    </div>
                </div>
                {isEditEnabled 
                    ?
                        <div className="stringAddDeleteWrapper">
                            <button onClick = {() => addStringTopHandler(tune)} className="addStringButtonTop"></button>
                            {stringsDelete}
                            <button onClick = {() => addStringBottomHandler(tune)} className="addStringButtonTop"></button>
                        </div>
                    :
                        <div></div>
                }
            </div>
        </div>
        <button onClick={function(event){setIsEditEnabled(!isEditEnabled);
            { 
                !isEditEnabled 
                ? 
                setStringCount(13)
                :  
                setStringCount(15)}}} 
        className="editStringsButton">Настроить инструмент</button>
    </div>
    )
}

export default Fretboard