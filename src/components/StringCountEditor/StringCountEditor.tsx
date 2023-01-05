import React from "react"
import './StringCountEditor.scss'

const StringCountEditor = ({tuning, editedTuningCallback}: {tuning: number[]; editedTuningCallback: Function}) => {
    let stringsDelete = tuning!.map((tuneNote, index) => {
        return  <button className="deleteStringButton" key={index} onClick = {() => stringDeleteHandler(index)}></button>
    })
    function stringDeleteHandler (index: number)
    {
        editedTuningCallback((existingItems: number[]) => {
                return [
                    ...existingItems.slice(0, index),
                    ...existingItems.slice(index + 1), 
                    
                ]      
           }     
        )
    } 

function addStringTopHandler (tuning: number[])
    {
        editedTuningCallback((existingItems: number[]) => {
                return [
                    0,
                    ...existingItems
                ]
           } 
        )
    }   

function addStringBottomHandler (tuning: number[])
    {
        editedTuningCallback((existingItems: number[]) => {
                return [ 
                    ...existingItems,
                    0
                ]
           } 
        )
    } 

    return (
       <div className="stringAddDeleteWrapper">
            <button onClick = {() => addStringTopHandler(tuning)} className="addStringButtonTop"></button>
            {stringsDelete} 
            <button onClick = {() => addStringBottomHandler(tuning)} className="addStringButtonTop"></button> 
       </div>
    )
}

export default StringCountEditor