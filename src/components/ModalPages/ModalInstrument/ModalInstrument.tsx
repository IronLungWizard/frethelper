import React from "react"
import './ModalInstrument.scss'



const ModalInstrument = ({setPresetTuning, setInstrumentName, setModalStage, presetTuning, instrumentName, tuningName}: 
    {setPresetTuning: Function, setInstrumentName: Function, setModalStage: Function, presetTuning: number[], instrumentName: string, tuningName: string}) => {



const trimTuning = (trimTuning: Boolean, instrumentName: string) => {
    if (trimTuning) {
        setPresetTuning(presetTuning.slice(2,6))
        setInstrumentName(instrumentName)
    }
    else {
        setPresetTuning(presetTuning)
        setInstrumentName(instrumentName)
    }
    setModalStage(3)
}

    return (
        <div className='modalContentWrapper'>
            <h2 className="modalWindowHeader">Выберите параметры инструмента!</h2>
            <span className="modalResult">Вы выбрали: {instrumentName + tuningName}</span>
            <div className='buttonsWrapper'>
                <button onClick={() => trimTuning(false, '6-струнная гитара, ')} className='modalButton'>Гитара</button>
                <button onClick={() => trimTuning(true, '4-струнный бас, ')} className='modalButton'>Бас</button>
            </div>
         </div>
    )
}

export default ModalInstrument