
import React from 'react';
import './ModalPreset.scss';
import CloseVector from "../../../src/images/CloseVector.svg?url";
import ModalArrow from "../../../src/images/ModalArrow.svg?url";
import { useState } from 'react';
import ModalTuning from '../ModalPages/ModalTuning/ModalTuning';
import ModalInstrument from '../ModalPages/ModalInstrument/ModalInstrument';
import ModalConfirmation from '../ModalPages/ModalConfirmation/ModalConfirmation';
import { useEffect } from 'react';

const ModalPreset = ({ setModalPresetVisible, tuningCallback, instrumentLineCallback }: { setModalPresetVisible: Function, tuningCallback: Function, instrumentLineCallback: Function }) => {

    const [modalStage, setModalStage] = useState(1)
    const [presetTuning, setPresetTuning] = useState<number[]>([])
    const [instrumentName, setInstrumentName] = useState<string>('')
    const [tuningName, setTuningName] = useState<string>('')
    const [canGoBack, setCanGoBack] = useState(false)
    const [canSave, setCanSave] = useState(false)


    useEffect(() => {
        if (instrumentName && tuningName) {
            setCanSave(true)
        }
        if (tuningName) {
            setCanGoBack(true)
        }
        else {
            setCanGoBack(false)
        }
    }, [instrumentName, tuningName, modalStage]);


    const goBack = () => {
        if (instrumentName) {
            setInstrumentName('')
        }
        if (!instrumentName && tuningName ) {
            setTuningName('')
        }
        setModalStage(modalStage - 1)
    }


    return (
        <div className="modalWrapper" onClick={() => setModalPresetVisible(false)}>
            <div className="modalWindow" onClick={(e) => e.stopPropagation()}>
                <img src={CloseVector} onClick={() => setModalPresetVisible(false)} className="closeVector"></img>
                {canGoBack
                    ?
                    <img src={ModalArrow} onClick={() => goBack()} className="modalArrow"></img>
                    :
                    <></>
                }
                {(() => {
                    if (modalStage == 1) {
                        return (
                            <ModalTuning setTuningName={setTuningName} setPresetTuning={setPresetTuning} setModalStage={setModalStage}></ModalTuning>
                        )
                    } else if (modalStage == 2) {
                        return (
                            <ModalInstrument setInstrumentName={setInstrumentName} setPresetTuning={setPresetTuning}
                                setModalStage={setModalStage} presetTuning={presetTuning} instrumentName={instrumentName} tuningName={tuningName}></ModalInstrument>
                        )
                    }
                    if (canSave) {
                        return (
                            <ModalConfirmation tuningCallback={tuningCallback} instrumentName={instrumentName} tuningName={tuningName}
                                presetTuning={presetTuning} setModalPresetVisible={setModalPresetVisible} instrumentLineCallback={instrumentLineCallback}></ModalConfirmation>
                        )
                    }
                })()}
            </div>
        </div>
    );
};

export default ModalPreset;