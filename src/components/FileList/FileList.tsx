import React, { useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
import Row from '../Row/Row';
interface FileListProps {
    files: DisplayFile[]
}

function FileList({files}: FileListProps) { 
    return (
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
    )
}

export default FileList