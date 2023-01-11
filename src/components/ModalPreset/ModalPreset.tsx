
import React from 'react';
import './ModalPreset.scss';
import CloseVector from "../../../src/images/CloseVector.svg?url";
import ModalArrow from "../../../src/images/ModalArrow.svg?url";
import { useState } from 'react';

const ModalPreset = ({setModalPresetVisible, tuningCallback, instrumentLineCallback}: {setModalPresetVisible: Function, tuningCallback: Function, instrumentLineCallback: Function}) => {

    const [modalStage, setModalStage] = useState(1)
    const defaultTunings = [[0, 7, 3, 10, 5, 0],[0, 7, 3, 10, 5, 10],[0, 8, 3, 8, 3, 8]]
    const [presetTuning, setPresetTuning] = useState<number[]>([])
    const [instrumentName, setInstrumentName] = useState<string>('')
    const [tuningName, setTuningName] = useState<string>('')

    const chooseTuning = (chosenTuning: number[], tuningName: string) => {
        setTuningName(tuningName)
        setPresetTuning(chosenTuning)
        setModalStage(2)
    }

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

    const goBack = () => {
        if (modalStage == 2) {
            setModalStage(1)
        }
        else { if (modalStage == 3) {
                setInstrumentName('')
                setModalStage(2)
            }
        }
    }

    return (
        <div className="modalWrapper" onClick={() => setModalPresetVisible(false)}>
            <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
               
                {(() => {
                    if (modalStage == 1) {
                    return (
                    <div className='modalContentWrapper'>
                        <img src={CloseVector} onClick={() => setModalPresetVisible(false)} className="closeVector"></img>
                        <h2 className="modalWindowHeader">Выберите параметры инструмента!</h2>
                        <div className='buttonsWrapper'>
                            <button onClick={() => chooseTuning(defaultTunings[0], 'E-standard')} className='modalButton'>E-standard</button>
                            <button onClick={() => chooseTuning(defaultTunings[1], 'Drop D')} className='modalButton'>Drop D</button>
                            <button onClick={() => chooseTuning(defaultTunings[2], 'Open C')} className='modalButton'>Open C</button>
                        </div>
                    </div>
                    )
                    } else if (modalStage == 2) {
                    return (
                        <div className='modalContentWrapper'>
                            <img src={ModalArrow} onClick={() => goBack()} className="modalArrow"></img>
                            <img src={CloseVector} onClick={() => setModalPresetVisible(false)} className="closeVector"></img>
                            <h2 className="modalWindowHeader">Выберите параметры инструмента!</h2>
                            <span className="modalResult">Вы выбрали: {instrumentName + tuningName}</span>
                            <div className='buttonsWrapper'>
                                <button onClick={() => trimTuning(false, '6-струнная гитара, ')} className='modalButton'>Гитара</button>
                                <button onClick={() => trimTuning(true, '4-струнный бас, ')} className='modalButton'>Бас</button>
                            </div>
                        </div>
                    )
                    } else if (modalStage == 3){
                    return (
                        <div className='modalContentWrapper'>
                            <img src={ModalArrow} onClick={() => goBack()} className="modalArrow"></img>
                            <img src={CloseVector} onClick={() => setModalPresetVisible(false)} className="closeVector"></img>
                            <span className="modalResult">Вы выбрали: {instrumentName + tuningName}</span>
                            <span className="modalQuestion">Установить этот пресет?</span>
                            <div className='buttonsWrapper'>
                                <button onClick={() => {tuningCallback(presetTuning); setModalPresetVisible(false); instrumentLineCallback(instrumentName + tuningName)}} className='modalButton'>Да</button>
                                <button onClick={() => setModalPresetVisible(false)} className='modalButton'>Нет</button>
                            </div>
                        </div>
                    )
                    }
                })()}
            </div>
        </div>
    );
};

export default ModalPreset;