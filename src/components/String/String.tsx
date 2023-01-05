import React from "react"
import './String.scss'

type StringProp = {
    startNote: string | undefined
    stringCount: number
}

const String = (props: StringProp) => {
    let notes: string[] = ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'];
    let notesRearranged: string[]

    for (let index in notes) {
        if (notes[index] == props.startNote) {
            notesRearranged = (notes.slice(Number(index) - 0).concat(notes.slice(0, Number(index) - 0)));
            notesRearranged = (notesRearranged.concat(notesRearranged.slice(0, props.stringCount - 11))).slice(1)
        }
    }

    let noteList = notesRearranged!.map((note, index) => {
        return <section><div key={index} className={note}>{note}</div><div className="fretSeparator"></div></section>
    })
    return (
        <div className="string">
            <div className="fretsBorder"></div>
            {noteList}
            <div className="fretsBorder"></div>
        </div>
    )
}

export default String