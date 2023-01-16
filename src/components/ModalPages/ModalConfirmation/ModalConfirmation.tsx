import React from "react"
import './ModalConfirmation.scss'



const ModalConfirmation = ({tuningCallback, instrumentName, tuningName, presetTuning, setModalPresetVisible, instrumentLineCallback}: 
    {tuningCallback: Function, instrumentName: string, tuningName: string, presetTuning: number[], setModalPresetVisible: Function, instrumentLineCallback: Function}) => {




    return (
        <div className='modalContentWrapper'>
        <span className="modalResult">Вы выбрали: {instrumentName + tuningName}</span>
        <span className="modalQuestion">Установить этот пресет?</span>
        <div className='buttonsWrapper'>
            <button onClick={() => {tuningCallback(presetTuning); setModalPresetVisible(false); instrumentLineCallback(instrumentName + tuningName)}} className='modalButton'>Да</button>
            <button onClick={() => setModalPresetVisible(false)} className='modalButton'>Нет</button>
        </div>
    </div>
    )
}

export default ModalConfirmation