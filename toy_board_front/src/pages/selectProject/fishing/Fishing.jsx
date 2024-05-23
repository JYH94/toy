import './Fishing.css'
import Fishing_side from './Fishing_side/Fishing_side';
import Fishing_insert from './Fishing_side/Fishing_insert/Fishing_insert';
import { useState } from 'react';


const Fishing = () => {
    console.log("포인트맵 렌더링")

    const [selectOrInsert, setSelectOrInsert] = useState(true);

    return (
        <>
            <div className="container">
                <div className="contentBox">
                    <div id="map" style={{ width: "100%", height: "100%" }}></div>
                </div>
                {selectOrInsert ? <Fishing_side setSelectOrInsert={setSelectOrInsert} /> : <Fishing_insert setSelectOrInsert={setSelectOrInsert} />}
            </div>
        </>
    );
}

export default Fishing