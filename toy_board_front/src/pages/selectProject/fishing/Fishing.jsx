import './Fishing.css'
import Fishing_side from './Fishing_side/Fishing_side';
import Fishing_insert from './Fishing_side/Fishing_insert/Fishing_insert';


const Fishing = () => {
    console.log("포인트맵 렌더링")

    return (
        <>
            <div className="container">
                <div className="contentBox">
                    <div id="map" style={{ width: "100%", height: "100%" }}></div>
                </div>
                <Fishing_side />
                {/* <Fishing_insert/> */}
            </div>
        </>
    );
}

export default Fishing