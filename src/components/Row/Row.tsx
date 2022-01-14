import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './Row.css'
import DisplayFile from '../../types/DisplayFile';
interface RowProps {
    file: DisplayFile
}

function circleClass(status: string): string {
    return status === "available" ? "green" : "clear"
}

function Row({file}: RowProps) { 
    return (
        <div className="grid-table-row" role="row">
            <div className="" role="cell"><input type="checkbox" defaultChecked={file.checked} /></div>
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