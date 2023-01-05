import './App.scss';
import React from 'react';
import { useState } from 'react';
import EditPage from './components/EditPage/EditPage';
import ViewPage from './components/ViewPage/ViewPage';

function App() {
  const [tuning, setTuning] = useState([0, 5, 10, 3, 7, 0])
  const [stringCount, setStringCount] = useState(15)
  const [isEditing, setIsEdiTing] = useState(false)

  const tuningCallback = (tuningData: number[]) => {
    setTuning(tuningData)
  }
  const switchModeCallback = (isEditingData: boolean) => {
    setIsEdiTing(isEditingData)
    if (isEditingData) {
      setStringCount(14)
    }
    else {
      setStringCount(15)
    }
  }

  return (
    <div className="App">
      <div className="appContainer">  
      {isEditing ?
        <EditPage switchModeCallback={switchModeCallback} tuningCallback={tuningCallback} tuning={tuning} stringCount={stringCount}></EditPage>
        :
        <ViewPage switchModeCallback={switchModeCallback} tuning={tuning} stringCount={stringCount}></ViewPage>
      } 
      </div>
    </div>
  );
}

export default App;
