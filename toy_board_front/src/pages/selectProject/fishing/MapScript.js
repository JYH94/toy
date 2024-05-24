

// ** DB에 등록된 포인트 기준으로 맵생성
export function makeMarker(pointList, setPoint, setModal) {
    var { kakao } = window;


    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 100 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    var positions = [];

    for (let i = 0; i < pointList.length; i++) {
        positions.push({
            title: pointList[i].pointName,
            latlng: new kakao.maps.LatLng(pointList[i].pointLat, pointList[i].pointLng)
        })
    }

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    var bounds = new kakao.maps.LatLngBounds();

    for (var i = 0; i < pointList.length; i++) {
        displayMarker(pointList[i]);
        bounds.extend(new kakao.maps.LatLng(pointList[i].pointLat, pointList[i].pointLng));
    }

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
    map.setBounds(bounds);

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {

        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.pointLat, place.pointLng)
        });
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
                '<div style="padding:5px;font-size:12px;height:70px">' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">${place.pointName}</span>`
                + '<br>' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">[${place.pointDesc}]</span>`
                + place.pointAddr +
                (setModal ? '<div onclick="setModal(true)">상세보기</div>' : '') +
                + '</div>');
            infowindow.open(map, marker);

            if(setModal) {
                setModal(true);
            }
        });
    }


    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다


    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
    });


    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        marker.setMap(map);
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        if (setPoint) {
            setPoint(prevPoint => ({
                ...prevPoint,
                pointLat: latlng.getLat(),
                pointLng: latlng.getLng()
            }));
        }
    });

    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        // 클릭한 좌표를 변수에 저장
        var latlng = mouseEvent.latLng;

        // 클릭한 좌표로부터 주소를 얻음
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                // 주소를 얻었을 때의 처리
                var address = result[0].address.address_name;

                // 주소를 화면에 출력하거나 원하는 처리를 수행
                // 여기서는 setPoint 함수를 사용하여 주소를 업데이트
                if (setPoint) {
                    setPoint(prevPoint => ({
                        ...prevPoint,
                        pointLat: latlng.getLat(),
                        pointLng: latlng.getLng(),
                        pointAddr: address
                    }));
                }
            } else {
                // 주소를 얻지 못했을 때의 처리
                console.error('주소를 찾을 수 없습니다.');
            }
        });
    });


}




// ** 우측 Point리스트 클릭시 지도 위치 이동
export function whichPoint(point) {
    var { kakao } = window;

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var bounds = new kakao.maps.LatLngBounds();

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(point.pointLat, point.pointLng)
    });

    bounds.extend(new kakao.maps.LatLng(point.pointLat, point.pointLng));
    map.setBounds(bounds);

    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
    var content =
        '<div style="padding:5px;font-size:12px;height:70px">' +
        `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">${point.pointName}</span>`
        + '<br>' +
        `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">[${point.pointDesc}]</span>`
        + point.pointAddr + '</div>';

    infowindow.setContent(content);
    infowindow.open(map, marker);

    kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(content);
        infowindow.open(map, marker);
    });
}








export const searchInKaKao = (keyword, setPoint) => {


    var { kakao } = window;
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch(keyword, placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i = 0; i < data.length; i++) {
                // displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        }
    }



    var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다


    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
        markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

    // // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage // 마커이미지 설정 
    });


    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        marker.setMap(map);
        // 클릭한 위도, 경도 정보를 가져옵니다 
        var latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        if (setPoint) {
            setPoint(prevPoint => ({
                ...prevPoint,
                pointLat: latlng.getLat(),
                pointLng: latlng.getLng()
            }));
        }
    });


    kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
        // 클릭한 좌표를 변수에 저장
        var latlng = mouseEvent.latLng;

        // 클릭한 좌표로부터 주소를 얻음
        var geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2Address(latlng.getLng(), latlng.getLat(), function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
                // 주소를 얻었을 때의 처리
                var address = result[0].address.address_name;

                // 주소를 화면에 출력하거나 원하는 처리를 수행
                // 여기서는 setPoint 함수를 사용하여 주소를 업데이트
                if (setPoint) {
                    setPoint(prevPoint => ({
                        ...prevPoint,
                        pointLat: latlng.getLat(),
                        pointLng: latlng.getLng(),
                        pointAddr: address
                    }));
                }
            } else {
                // 주소를 얻지 못했을 때의 처리
                console.error('주소를 찾을 수 없습니다.');
            }
        });
    });
}