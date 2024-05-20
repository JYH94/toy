import Kakao from "./Kakao";
import './Fishing.css'
import { Map, MapMarker } from "react-kakao-maps-sdk";
import React, { useEffect, useState } from 'react'

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

    const apiKey = process.env.REACT_APP_KAKAOMAP_API_KEY;
    const [point, setPoint] = useState();


    useEffect(() => {
        const loadKakaoMap = async () => {
            try {
                await loadScript(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=LIBRARY`);
                // Kakao Maps SDK 스크립트가 로드된 후에 kakao.maps 객체가 사용 가능한지 확인
                if (window.kakao && window.kakao.maps) {
                    const { kakao } = window;
                    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });


                    const container = document.getElementById('map');
                    const options = {
                        center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
                        level: 3
                    };
                    const map = new kakao.maps.Map(container, options);

                    // 장소 검색 객체를 생성합니다
                    const ps = new kakao.maps.services.Places();

                    // 키워드로 장소를 검색합니다
                    ps.keywordSearch('저수지', placesSearchCB);


                    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
                    function placesSearchCB(data, status, pagination) {
                        if (status === kakao.maps.services.Status.OK) {
                            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                            // LatLngBounds 객체에 좌표를 추가합니다
                            const bounds = new kakao.maps.LatLngBounds();
                            for (let i = 0; i < data.length; i++) {
                                displayMarker(data[i]);
                                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                            }
                            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                            map.setBounds(bounds);
                        }
                    }

                    // 지도에 마커를 표시하는 함수입니다
                    function displayMarker(place) {
                        // 마커를 생성하고 지도에 표시합니다
                        const marker = new kakao.maps.Marker({
                            map: map,
                            position: new kakao.maps.LatLng(place.y, place.x)
                        });

                        // 마커에 클릭이벤트를 등록합니다
                        kakao.maps.event.addListener(marker, 'click', function () {
                            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                            infowindow.open(map, marker);
                        });
                    }
                } else {
                    console.error('Failed to load Kakao Map script: Kakao maps object is not available.');
                }
            } catch (error) {
                console.error('Failed to load Kakao Map script:', error);
            }
        };
        loadKakaoMap();
    }, []);



    return (
        <div className="container">
            <div className="contentBox">
                <div id="map" style={{ width: "100%", height: "100%" }}></div>
            </div>
        </div>
    );
}

export default Fishing