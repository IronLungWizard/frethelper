
import React from 'react';
import './ModalPreset.scss';
import CloseVector from "../../../src/images/CloseVector.svg?url";
import { useState } from 'react';

const ModalPreset = ({setModalPresetVisible, tuningCallback}: {setModalPresetVisible: Function, tuningCallback: Function}) => {

    const [modalStage, setModalStage] = useState(1)
    const defaultTunings = [[0, 7, 3, 10, 5, 0],[0, 7, 3, 10, 5, 10],[0, 8, 3, 8, 3, 8]]
    const [presetTuning, setPresetTuning] = useState<number[]>([])

    const chooseTuning = (chosenTuning: number[]) => {
        setPresetTuning(chosenTuning)
        setModalStage(2)
    }

    const trimTuning = (trimTuning: Boolean) => {
        if (trimTuning) {
            tuningCallback(presetTuning.slice(2,6))
        }
        else {
            tuningCallback(presetTuning)
        }
        setModalPresetVisible(false)
    }

    return (
        <div className="modalWrapper" onClick={() => setModalPresetVisible(false)}>
            <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
                <h2 className="modalWindowHeader">Выберите параметры инструмента!</h2>
                <img src={CloseVector} onClick={() => setModalPresetVisible(false)} className="closeVector"></img>
                {modalStage == 1
                ?
                <div className='buttonsWrapper'>
                    <button onClick={() => chooseTuning(defaultTunings[0])} className='modalButton'>E-standard</button>
                    <button onClick={() => chooseTuning(defaultTunings[1])} className='modalButton'>Drop D</button>
                    <button onClick={() => chooseTuning(defaultTunings[2])} className='modalButton'>Open C</button>
                </div>
                :
                <div className='buttonsWrapper'>
                    <button onClick={() => trimTuning(false)} className='modalButton'>Гитара</button>
                    <button onClick={() => trimTuning(true)} className='modalButton'>Bass</button>
                </div>
                }
            </div>
        </div>
    );
};

export default ModalPreset;