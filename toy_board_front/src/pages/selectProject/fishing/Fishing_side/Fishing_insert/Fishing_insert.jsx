

import { useState } from 'react';
import './Fishing_insert.css'
import { makeMarker, searchInKaKao, loadMap } from '../../MapScript';
import { api } from '../../../../model';
import { useEffect } from 'react';


const Fishing_insert = ({ setSelectOrInsert }) => {

    // * Status *
    const [point, setPoint] = useState({
        pointName: '',
        pointDesc: '',
        pointLat: '',
        pointLng: '',
        pointAddr: ''
    });
    const [keyword, setKeyword] = useState('');



    useEffect(() => {
        api("/fishing/selectall", 'get')
            .then(res => {
                makeMarker(res.data, setPoint);
            })
            .catch(err => console.log(err.message));
    }, []);

    // ============================
    const changePoint = (e) => {
        setPoint(pre => ({
            ...pre,
            [e.target.name]: e.target.value
        }))
    }

    const changeKeyword = (e) => {
        setKeyword(e.target.value)
    }

    // ===================================
    const getSearch = () => {
        searchInKaKao(keyword, setPoint)
    }
    // ===================================

    const insertPoint = () => {
        api('/fishing/save', 'post', point)
            .then(res => {
                makeMarker(res.data, setPoint);
                console.log('ok');
            })
            .catch(err => {
                alert(err.message + `\n잠시후 다시 시도하세요`);
            });
    }

    return (
        <div className="insert_AddrBox">
            <div id='selectInsertOrSelect'>
                <div onClick={() => setSelectOrInsert(true)}>포인트검색</div>
                <div onClick={() => setSelectOrInsert(false)}>포인트입력</div>
            </div>
            <div className="input_for_search">
                <input type="text" name="" id="" onChange={changeKeyword} placeholder='상세 주소를 입력하면 좋은 결과를 얻을 수 있습니다.' />
                <button onClick={getSearch}>검색</button>
            </div>
            <p className='forHelp'><span className='forHelp_span'>*</span>카카오맵 기준으로 검색됩니다.상세 주소를 입력 후 원하는 위치를 클릭하여 포인트를 등록해주세요.</p>
            <label htmlFor="" className="input_for_insert"><p>포인트 이름</p>
                <input type="text" name="pointName" placeholder="모두가 알 수 있도록 지어주세요. ex) '금사지 상류'" value={point.pointName} onChange={changePoint} />
            </label>
            <label htmlFor="" className="input_for_insert"><p>포인트 부가설명</p>
                <input type="text" name="pointDesc" placeholder="간단한 설명을 적어주세요 ex) '다리 밑'" value={point.pointDesc} onChange={changePoint} />
            </label>
            <label htmlFor="" className="input_for_insert"><p>포인트 입력자</p>
                <input type="text" name="pointRegister" placeholder="이름 or 별명 ex) '런커'" value={point.pointRegister} onChange={changePoint} />
            </label>
            <label htmlFor="" className="input_for_insert latlng"><p>좌표</p>
                <input type="text" placeholder="경도" value={point.pointLat} required />
                <input type="text" placeholder="위도" value={point.pointLng} required />
            </label>
            <div className="btnBox">
                <button onClick={insertPoint}>등록</button>
                <button onClick={() => setPoint({
                    pointName: '',
                    pointDesc: '',
                    pointLat: '',
                    pointLng: '',
                    pointRegister: ''
                })}>초기화</button>
            </div>

            <div className='manual'>
                <h2><span className='forHelp_span'>**</span>포인트 등록방법</h2>
                <p>1. 포인트 상세주소 or 근처 상호검색</p>
                <p>2. 원하는 위치 클릭 (마커 생성)</p>
                <p>3. 우측 메뉴에서 포인트명,설명,이름 입력</p>
                <p>4. 입력버튼 눌러서 포인트 등록</p>
            </div>
        </div>
    );
}

export default Fishing_insert;