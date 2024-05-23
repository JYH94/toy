

import { useState } from 'react';
import './Fishing_insert.css'
import { makeMarker } from '../../MapScript';
import { api } from '../../../../model';
import { useEffect } from 'react';


const Fishing_insert = () => {

    // * Status *
    const [point, setPoint] = useState({
        pointName: '',
        pointDesc: '',
        pointLat: '',
        pointLng: '',
        pointAddr: ''
    });
    const [pointList, setPointList] = useState([]);
    const [keyword, setKeyword] = useState('');


    useEffect(() => {
        api("/fishing/selectall", 'get')
            .then(res => {
                setPointList(res.data);
                makeMarker(res.data);
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
        api(`/fishing/selectwhere?pointname=${keyword}`)
            .then(res => {
                if (res.data) {
                    makeMarker(res.data);
                } else {
                    alert('검색결과가 없습니다.');
                }
            }).catch(err => console.log(err.message))
    }
    // ===================================

    const insertPoint = () => {
        api('/fishing/save', 'post', point)
            .then(res => {
                console.log(res.data);
                console.log('ok');
            })
            .catch(err => {
                alert(err.message + `\n잠시후 다시 시도하세요`);
            });
    }


    return (
        <div className="insert_AddrBox">
            <div className="input_for_search">
                <input type="text" name="" id="" onChange={changeKeyword} />
                <button onClick={getSearch}>검색</button>
            </div>
            <label htmlFor="" className="input_for_insert"><p>포인트 이름</p>
                <input type="text" name="pointName" placeholder="모두가 알 수 있도록 지어주세요." value={point.pointName} onChange={changePoint} />
            </label>
            <label htmlFor="" className="input_for_insert"><p>포인트 부가설명</p>
                <input type="text" name="pointDesc" placeholder="간단한 설명을 적어주세요" value={point.pointDesc} onChange={changePoint} />
            </label>
            <label htmlFor="" className="input_for_insert"><p>포인트 입력자</p>
                <input type="text" name="pointRegister" placeholder="이름 / 별명" value={point.pointRegister} onChange={changePoint} />
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
        </div>
    );
}

export default Fishing_insert;