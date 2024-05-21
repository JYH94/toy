import './Fishing.css'
import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { api } from '../../model';
import { useRef } from 'react';
import { BASE_URL } from '../../model';


let { kakao } = window;
const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY;

const loadScript = (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;

        document.head.appendChild(script);
    });
};






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
    const [keyword, setKeyword] = useState('저수지');
    
    


    useEffect(() => {
        api("/fishing/selectall", 'get')
            .then(res => setPointList(res.data))
            .catch(err => console.log(err.message));

        var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
            var mapOption = {
                center: new kakao.maps.LatLng(127.91255305305825, 36.49776729258252), // 지도의 중심좌표
                level: 3 // 지도의 확대 레벨
            };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new kakao.maps.Map(mapContainer, mapOption);



        // var points = [
        //     new kakao.maps.LatLng(33.452278, 126.567803),
        //     new kakao.maps.LatLng(33.452671, 126.574792),
        //     new kakao.maps.LatLng(33.451744, 126.572441)
        // ];

        // // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
        // var bounds = new kakao.maps.LatLngBounds();

        var i, marker;
        // for (i = 0; i < points.length; i++) {
        //     // 배열의 좌표들이 잘 보이게 마커를 지도에 추가합니다
        //     marker = new kakao.maps.Marker({ position: points[i] });
        //     marker.setMap(map);

        //     // LatLngBounds 객체에 좌표를 추가합니다
        //     bounds.extend(points[i]);
        // }
        // function setBounds() {
        //     // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
        //     // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
        //     map.setBounds(bounds);
        // }

        kakao.maps.event.addListener(map, 'click', function (mouseEvent) {

            // 클릭한 위도, 경도 정보를 가져옵니다 
            var latlng = mouseEvent.latLng;

            console.log(mouseEvent.latLng);

            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng);
        });

    }, []);

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
                        <button >검색</button>
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