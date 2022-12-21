import React from "react"
import './String.scss'

type StringProp = {   
    startNote: string | undefined
}

const String = (props: StringProp) => {
    let notes: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    var notesRearranged: string[]

    for (let index in notes){
        if (notes[index] == props.startNote) {
            notesRearranged = (notes.slice(Number(index)-0).concat(notes.slice(0, Number(index)-0)));
            console.log(notesRearranged);
        }
    }

let noteList = notesRearranged!.map((note) => {
    return <div key={note}> {note}</div>
})
    return (
            <div className="string">
                {noteList}
            </div>
    )
}

export default String