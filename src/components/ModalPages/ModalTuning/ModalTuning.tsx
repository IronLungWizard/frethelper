import React from "react"
import './ModalTuning.scss'



const ModalTuning = ({setTuningName, setPresetTuning, setModalStage}: {setTuningName: Function, setPresetTuning: Function, setModalStage: Function}) => {

const defaultTunings = [[0, 7, 3, 10, 5, 0],[0, 7, 3, 10, 5, 10],[0, 8, 3, 8, 3, 8]]

const chooseTuning = (chosenTuning: number[], tuningName: string) => {
    setTuningName(tuningName)
    setPresetTuning(chosenTuning)
    setModalStage(2)
}

    return (
        <div className='modalContentWrapper'>
            <h2 className="modalWindowHeader">Выберите параметры инструмента!</h2>
            <div className='buttonsWrapper'>
                <button onClick={() => chooseTuning(defaultTunings[0], 'E-standard')} className='modalButton'>E-standard</button>
                <button onClick={() => chooseTuning(defaultTunings[1], 'Drop D')} className='modalButton'>Drop D</button>
                <button onClick={() => chooseTuning(defaultTunings[2], 'Open C')} className='modalButton'>Open C</button>
        </div>
    </div>
    )
}

export default ModalTuning