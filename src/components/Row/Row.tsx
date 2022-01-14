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
            <div className="flex-cell" role="cell"><input type="checkbox" title={file.checked ? "Is Selected" : "Not Selected"} readOnly checked={file.checked} /></div>
            <div className="flex-cell" role="cell">{file.name}</div>
            <div className="flex-cell" role="cell">{file.device}</div>
            <div className="flex-cell" role="cell">{file.path}</div>
            <div className="flex-cell" role="cell">
                <FontAwesomeIcon data-testid="circle" className={"circle " + circleClass(file.status)} icon={faCircle}/>
                {file.status}
            </div>
        </div>
    )
}

export default Row