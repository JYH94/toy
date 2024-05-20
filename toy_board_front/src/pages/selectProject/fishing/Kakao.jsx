import { useEffect } from "react";
import MapScript from "./MapScript";
import axios from 'axios';


const Kakao = () => {

    useEffect(() => {
        const { kakao } = window; // 전역 객체에서 kakao를 가져옵니다.
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
                level: 7 // 지도의 확대 레벨
            };

        var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

        // 지도에 지형정보를 표시하도록 지도타입을 추가합니다
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);

        // 아래 코드는 위에서 추가한 지형정보 지도타입을 제거합니다
        // map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);    
    }, []);

    return (
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
    )
}

export default Kakao;