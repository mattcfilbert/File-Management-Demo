import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Row.css'
import DisplayFile from '../../types/DisplayFile';
interface RowProps {
    file: DisplayFile,
    index: number,
    updateSelect: (i: number) => void
}

function circleClass(status: string): string {
    return status === "available" ? "green" : "clear"
}

function Row({file, index, updateSelect}: RowProps) { 
    return (
        <div className={"grid-table-row " + (file.checked ? "checked row" : "row")} id={"row-" + index} role="row" onClick={() => updateSelect(index)}>
            <div className="" role="cell"><input type="checkbox" readOnly checked={file.checked} /></div>
            <div className="" role="cell">{file.name}</div>
            <div className="" role="cell">{file.device}</div>
            <div className="" role="cell">{file.path}</div>
            <div className="" role="cell">
                <FontAwesomeIcon className={"circle " + circleClass(file.status)} icon={faCircle}/>
                {file.status}
            </div>
        </div>
    )
}

export default Row