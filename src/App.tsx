import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { intakeData } from './utils/ApiPayloadUtils';
import DisplayFile from './types/DisplayFile';
import ApiPayload from './types/ApiPayload';


function App() {
  const apiJSON = [

    {name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},
    
    {name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available'},
    
    {name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available'},
    
    {name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled'},
    
    {name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled'}
    
    ]
  const [apiPayload] = useState<ApiPayload[]>(apiJSON)
  const [displayedFiles, setDisplayedFiles] = useState<DisplayFile[]>([])

  useEffect(() => {
    setDisplayedFiles(intakeData(apiPayload))
  }, [apiPayload])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {displayedFiles.map((f, i) => {
            return <li key={i}> {f.name}, {f.checked.toString()}</li>
          })}
        </ul>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
