import React from "react"
import './String.scss'

type StringProp = {   
    startNote: string | undefined
}

const String = (props: StringProp) => {
    let notes: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    let notesRearranged: string[]

    for (let index in notes){
        if (notes[index] == props.startNote) {
            notesRearranged = (notes.slice(Number(index)-0).concat(notes.slice(0, Number(index)-0)));
            notesRearranged = (notesRearranged.concat(notesRearranged.slice(0,6))).slice(1)
        }
    }

let noteList = notesRearranged!.map((note) => {
    return <section><div key={note} className={note}>{note}</div><div className="fretSeparator"></div></section>
})
    return (
            <div className="string">
                {noteList}
            </div>
    )
}

export default String