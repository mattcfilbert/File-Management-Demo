import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
import Row from '../Row/Row';
import './FileList.css'
interface FileListProps {
    displayFiles: DisplayFile[]
}

function FileList({displayFiles}: FileListProps) { 
    const [numChecked, setNumChecked] = useState<number>(0)
    const [files, setFiles] = useState<DisplayFile[]>([])

    useEffect(() => {
        setFiles(displayFiles)
    }, [displayFiles])

    return (
        <>
            <div className="action-bar">
                <div>
                    <input type="checkbox" title="Toggle Select All" />
                </div>
                <div className="select-count">Selected {numChecked}</div>
                <div>
                    <button className="download"><FontAwesomeIcon icon={faDownload}/> Download Selected</button>
                </div>
            </div>
            <div role="table" aria-label="File Management Table" >
        
            <div className="grid-table-row" role="row">
                <div role="columnheader" title="Selected"></div>
                <div role="columnheader" title="Name">Name</div>
                <div role="columnheader" title="Device">Device</div>
                <div role="columnheader" title="Path">Path</div>
                <div role="columnheader" title="Status">Status</div>
            </div>
                {files.map((file, i) => {
                    return <Row file={file} key={i}/>
                })}
            </div>
       </>
    )
}

export default FileList