import './Fishing.css'
import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { api } from '../../model';
import { useRef } from 'react';
import { BASE_URL } from '../../model';
import { loadMap } from './MapScript';
import { searchMap } from './MapScript';
import { test } from './MapScript';
import { makeMarker } from './MapScript';


let { kakao } = window;
const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY;


const Fishing = () => {
    console.log("포인트맵 렌더링")

    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 100 // 지도의 확대 레벨
    };

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

    useEffect(() => {

    }, [])

    // =====================================================
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
        searchMap(keyword);
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
        <>
            <div className="container">
                <div className="contentBox">
                    <div id="map" style={{ width: "100%", height: "100%" }}></div>
                </div>
                <div className="insert_AddrBox">
                    <div className="input_for_search">
                        <input type="text" name="" id="" onChange={changeKeyword} />
                        <button onClick={getSearch}>검색</button>
                    </div>
                    <div id='menu_wrap'>

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
            </div>
        </>
    );
}

export default Fishing