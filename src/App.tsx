import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { intakeData } from './utils/ApiPayloadUtils';
import DisplayFile from './types/DisplayFile';
import ApiPayload from './types/ApiPayload';
import FileList from './components/FileList/FileList';


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
        <h1>File Management Demo</h1>
      </header>
      <main>
        <FileList files={displayedFiles}/>
      </main>
    </div>
  );
}

export default App;
