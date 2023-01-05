import React from "react"
import './TuningEditor.scss'

const TuningEditor = ({tuning, tuningCallback}: {tuning: number[]; tuningCallback: Function}) => {
    let noteList: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    
    let noteEditor = tuning!.map((tuneNote, index) => {
        return  <div key = {index} className={noteList[tuneNote]}>
                    <button onClick = {() => stringTuneDownHandler(index, tuneNote)} className="buttonStringTuningLower"></button>
                    <div className={noteList[tuneNote]}>{noteList[tuneNote]}</div>
                    <button onClick = {() => stringTuneUpHandler(index, tuneNote)}  className="buttonStringTuningHigher"></button>
                </div>
    })

    function tuneDownHandler(tune: number[]) {
        tuningCallback(
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
        tuningCallback(
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

     function stringTuneDownHandler(index: number, tuneNote: number) {
        tuningCallback((existingItems: number[]) => {
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
        tuningCallback((existingItems: number[]) => {
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

    return (
    <div className="tuningEditor">
        <div className="tuningWholeEditor">
            <button onClick = {() => tuneDownHandler(tuning)}  className="buttonWholeTuningLower"></button>
            <div className="tuningHeader">Все</div>
            <button onClick = {() => tuneUpHandler(tuning)}   className="buttonWholeTuningHigher"></button> 
        </div>
        {noteEditor}
    </div>
    )
}

export default TuningEditor