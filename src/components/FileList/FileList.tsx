import React, { useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
import Row from '../Row/Row';
interface FileListProps {
    files: DisplayFile[]
}



function FileList({files}: FileListProps) { 
    return (
       <ul>
       {files.map((f, i) => {
           return <Row file={f} key={i}/>
       })}
       </ul>
    )
}

export default FileList