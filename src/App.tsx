import './App.scss';
import React from 'react';
import { useState } from 'react';
import EditPage from './components/EditPage/EditPage';
import ViewPage from './components/ViewPage/ViewPage';
import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import ModalPreset from './components/ModalPreset/ModalPreset';
import MobileNavbar from './components/MobileNavbar/MobileNavbar';
import FretboardEditor from './components/FretboardEditor/FretboardEditor';

function App() {
  const [tuning, setTuning] = useState<number[]>([])
  const defaultTuning = [0, 7, 3, 10, 5, 0]
  const defaultInstrumentLine = ('6-струнная гитара, E-standard')
  const [modalPresetVisible, setModalPresetVisible] = useState(false)
  const [instrumentLine, setInstrumentLine] = useState<string>('')
  
  
  
  useEffect(() => {
    if (localStorage.getItem("tuning")) {
      setTuning(JSON.parse(localStorage.getItem("tuning") || '{}'))
    }
    else {
      localStorage.setItem("tuning", JSON.stringify(defaultTuning))
    }


  }, []);


  useEffect(() => {
    if (localStorage.getItem("instrumentName")) {
      setInstrumentLine(JSON.parse(localStorage.getItem("instrumentName") || '{}'))
    }
    else {
      localStorage.setItem("instrumentName", JSON.stringify(defaultInstrumentLine))
    }
  }, []);
  


  const tuningCallback = (tuningData: number[]) => {
    setTuning(tuningData)
    localStorage.setItem("tuning", JSON.stringify(tuningData));
  }

  const instrumentLineCallback = (instrumentLineData: string) => {
    setInstrumentLine(instrumentLineData)
    localStorage.setItem("instrumentName", JSON.stringify(instrumentLineData));
  }

  const instrumentLineDeleteCallback = () => {
    setInstrumentLine("Свой инструмент")
    localStorage.setItem("instrumentName", JSON.stringify("Свой инструмент"));
  }

  const router = createBrowserRouter([
    {
      path: "frethelper",
      element:  <ViewPage setTuning={setTuning} instrumentLine={instrumentLine} tuning={tuning} setModalPresetVisible={setModalPresetVisible}></ViewPage>,
    },
    {
      path: "frethelper/edit",
      element:  <EditPage instrumentLineDeleteCallback={instrumentLineDeleteCallback} setModalPresetVisible={setModalPresetVisible} tuningCallback={tuningCallback} 
      tuning={tuning}></EditPage>      
    },
   
  ]);



  return (
    <div className="App"> 
      <div className="appContainer">
         <div className="scrollContainer"> 
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
        </div>
      {modalPresetVisible
      ?<ModalPreset instrumentLineCallback={instrumentLineCallback} tuningCallback={tuningCallback} setModalPresetVisible={setModalPresetVisible}></ModalPreset>
      :<></>} 
      </div>
    </div>
  );
}

export default App;
