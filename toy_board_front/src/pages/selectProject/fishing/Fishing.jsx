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
    const [point, setPoint] = useState({
        La: '',
        Ma: ''
    });


    useEffect(() => {
        const loadKakaoMap = async () => {
            try {
                await loadScript(`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=LIBRARY`);
                let { kakao } = window;
                // Kakao Maps SDK 스크립트가 로드된 후에 kakao.maps 객체가 사용 가능한지 확인
                if (window.kakao && window.kakao.maps) {
                    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                        mapOption = {
                            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                            level: 1 // 지도의 확대 레벨
                        };

                    // 지도를 생성합니다    
                    var map = new kakao.maps.Map(mapContainer, mapOption);

                    // 주소-좌표 변환 객체를 생성합니다
                    var geocoder = new kakao.maps.services.Geocoder();

                    var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
                        infowindow = new kakao.maps.InfoWindow({ zindex: 1 }); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다


                    // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
                    searchAddrFromCoords(map.getCenter(), displayCenterInfo);

                    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
                    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
                        searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
                            if (status === kakao.maps.services.Status.OK) {
                                var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                                detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

                                var content = '<div class="bAddr">' +
                                    '<span class="title">법정동 주소정보</span>' +
                                    detailAddr +
                                    '</div>';

                                // 마커를 클릭한 위치에 표시합니다 
                                marker.setPosition(mouseEvent.latLng);
                                marker.setMap(map);
                                console.log(mouseEvent.latLng);
                                setPoint((pre) => ({
                                    ...pre,
                                    La: mouseEvent.latLng.La,
                                    Ma: mouseEvent.latLng.Ma
                                }))

                                // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                                infowindow.setContent(content);
                                infowindow.open(map, marker);
                            }
                        });
                    });

                    // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
                    kakao.maps.event.addListener(map, 'idle', function () {
                        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
                    });

                    function searchAddrFromCoords(coords, callback) {
                        // 좌표로 행정동 주소 정보를 요청합니다
                        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
                    }


                    function searchDetailAddrFromCoords(coords, callback) {
                        // 좌표로 법정동 상세 주소 정보를 요청합니다
                        geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
                    }

                    // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
                    function displayCenterInfo(result, status) {
                        if (status === kakao.maps.services.Status.OK) {
                            var infoDiv = document.getElementById('centerAddr');

                            if (infoDiv) {
                                for (var i = 0; i < result.length; i++) {
                                    // 행정동의 region_type 값은 'H' 이므로
                                    if (result[i].region_type === 'H') {
                                        infoDiv.innerHTML = result[i].address_name;
                                        break;
                                    }
                                }
                            }
                        }
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