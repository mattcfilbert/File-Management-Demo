import React, { useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
interface RowProps {
    file: DisplayFile
}



function Row({file}: RowProps) { 
    return (
        <li>{file.name}</li>
    )
}

export default Row