import { Link } from 'react-router-dom';
import './SelectProject.css';


const SelectProject = () => {

    return (
        <div id='selectProject'>
            <ul id='projectBox'>
                <Link to='/fishing'>1</Link>
                <Link to='/board'>2</Link>
            </ul>
        </div>
    )
}

export default SelectProject;