import React from "react"
import './Fretboard.scss'
import String from "../String/String"

const Fretboard = () => {
    let tune: string[] = ['E', 'B', 'G','D', 'A', 'E'];
    let stringsList = tune!.map((note) => {
    return  <String startNote={note}></String>
})
    return (
        <div>
            {stringsList}
        </div>
    )
}

export default Fretboard