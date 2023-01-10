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

function App() {
  const [tuning, setTuning] = useState<number[]>([])
  const defaultTuning = [0, 7, 3, 10, 5, 0]
  const [stringCount, setStringCount] = useState(15)
  const [modalPresetVisible, setModalPresetVisible] = useState(false)


  useEffect(() => {
    if (localStorage.getItem("tuning")) {
      setTuning(JSON.parse(localStorage.getItem("tuning") || '{}'))
    }
    else {
      localStorage.setItem("tuning", JSON.stringify(defaultTuning))
    }
  }, []);


  const tuningCallback = (tuningData: number[]) => {
    setTuning(tuningData)
    localStorage.setItem("tuning", JSON.stringify(tuningData));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:  <ViewPage tuning={tuning} stringCount={stringCount} setModalPresetVisible={setModalPresetVisible}></ViewPage>,
    },
    {
      path: "edit",
      element:  <EditPage tuningCallback={tuningCallback} tuning={tuning} stringCount={stringCount} setModalPresetVisible={setModalPresetVisible}></EditPage>      
    },
   
  ]);



  return (
    <div className="App">
      <div className="appContainer">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      {modalPresetVisible
      ?
      <ModalPreset tuningCallback={tuningCallback} setModalPresetVisible={setModalPresetVisible}></ModalPreset>
      :
      <></>
      }
      </div>
    </div>
  );
}

export default App;
