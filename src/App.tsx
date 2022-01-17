import { SetStateAction, useEffect, useState } from 'react';
import './App.css';
import DisplayFile from './types/DisplayFile';
import ApiPayload from './types/ApiPayload';
import FileList from './components/FileList/FileList';

interface AppProps {
  apiOutput: ApiPayload[],
  intakeData: (apiPayload: ApiPayload[]) => SetStateAction<DisplayFile[]>
}

function App({apiOutput, intakeData}: AppProps) {
  
  const [apiPayload] = useState<ApiPayload[]>(apiOutput)
  const [displayedFiles, setDisplayedFiles] = useState<DisplayFile[]>([])

  useEffect(() => {
    setDisplayedFiles(intakeData(apiPayload))
  }, [apiPayload, intakeData])
  return (
    <div className="App">
      <header className="App-header">
        <h1>File Management Demo</h1>
      </header>
      <main>
        <FileList displayFiles={displayedFiles}/>
      </main>
    </div>
  );
}

export default App;
