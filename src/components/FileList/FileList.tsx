import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import DisplayFile from '../../types/DisplayFile';
import { SelectAllCheck } from '../../types/SelectAllCheck';
import Row from '../Row/Row';
import './FileList.css'
interface FileListProps {
    displayFiles: DisplayFile[]
}

function FileList({displayFiles}: FileListProps) { 
    const [numChecked, setNumChecked] = useState<number>(0)
    const [files, setFiles] = useState<DisplayFile[]>([])
    const [masterCheck, setMasterCheck] = useState<SelectAllCheck>(SelectAllCheck.None)
    const [indeterminate, setIndeterminate] = useState<boolean>(false)

    useEffect(() => {
        setFiles(displayFiles)
    }, [displayFiles])

    useEffect(() => {
        if(masterCheck === "SOME") {
            setIndeterminate(true)
        } else {
            setIndeterminate(false)
        }
    }, [masterCheck])

    function updateSelect(i: number): void {
        let temp = [...files]
        temp[i].checked = !temp[i].checked
        updateNumChecked(temp)
        setFiles(temp)
    }

    function updateNumChecked(arr: DisplayFile[]): void {
        let count = 0
        arr.forEach((el) => {
            if(el.checked) {
                count++
            }
        })
        setNumChecked(count)
        updateAllCheck(count)
    }

    function updateAllCheck(count: number): void {
        if(count === files.length) {
            setMasterCheck(SelectAllCheck.All)
        } else if(count > 0) {
            setMasterCheck(SelectAllCheck.Some)
        } else {
            setMasterCheck(SelectAllCheck.None)
        }
       
    }

    function selectAll(bool: boolean): void {
        let temp = [...files]
        temp.forEach(f => f.checked = bool)
        setFiles(temp)
    }

    function handleAllCheck(): void {
        if(masterCheck === SelectAllCheck.All) {
            setMasterCheck(SelectAllCheck.None)
            setNumChecked(0)
            selectAll(false)
        } else {
            setMasterCheck(SelectAllCheck.All)
            setNumChecked(files.length)
            selectAll(true)
        }
    }

    return (
        <>
            <div className="action-bar">
                <div>
                    <input type="checkbox" title="Toggle Select All" aria-label={"Files checked: " + masterCheck} onClick={handleAllCheck} checked={masterCheck === "ALL"} 
                        ref={input => {
                        if (input) {
                        input.indeterminate = indeterminate;
                        }
                    }}/>
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
                    return <Row file={file} index={i} updateSelect={updateSelect} key={i}/>
                })}
            </div>
       </>
    )
}

export default FileList