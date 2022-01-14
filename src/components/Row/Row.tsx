import React, { useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
interface RowProps {
    file: DisplayFile
}



function Row({file}: RowProps) { 
    return (
        <div className="grid-table-row" role="row">
            <div className="" role="cell"><input type="checkbox" defaultChecked={file.checked} /></div>
            <div className="" role="cell">{file.name}</div>
            <div className="" role="cell">{file.device}</div>
            <div className="" role="cell">{file.path}</div>
            <div className="" role="cell">{file.status}</div>
        </div>
    )
}

export default Row