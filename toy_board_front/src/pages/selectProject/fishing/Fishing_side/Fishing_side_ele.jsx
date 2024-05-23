
import './Fishing_side_ele.css'

const Fishing_side_ele = ({point}) => {
    

    return (
        <div className='point_ele'>
            <div>포인트명</div>
            <div>설명</div>
            <div>주소</div>
            <div>{point.pointName}</div>
            <div>{point.pointDesc}</div>
            <div>{point.pointAddr}</div>
        </div>
    )
}

export default Fishing_side_ele;