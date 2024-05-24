import { Link } from 'react-router-dom';
import './SelectProject.css';


const SelectProject = () => {

    return (
        <div id='selectProject'>
            <ul id='projectBox'>
                <Link to='/abiutme'></Link>
                <Link to='/fishing'>
                    <h3><span className="forHelp_span">*</span>낚시인 커뮤니티</h3>
                    <img id='mapImg' src='../../../map.png' alt="" />
                    
                    <div className='manual'>
                        <p className="forHelp">- 등록된 포인트 조회(DB)</p>
                        <p className="forHelp">- 새로운 포인트 등록</p>
                        <p className="forHelp">- 지역별 낚시포인트</p>
                    </div>
                </Link>
                <Link to='/board'></Link>
                <Link to='/board'></Link>
                <Link to='/board'></Link>
                <Link to='/board'></Link>
            </ul>
        </div>
    )
}

export default SelectProject;