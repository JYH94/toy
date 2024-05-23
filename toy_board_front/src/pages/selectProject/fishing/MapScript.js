import { api } from "../../model";


// 최초 지도 생성
export function loadMap() {
    var { kakao } = window;
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 10
    };
    var map = new kakao.maps.Map(container, options);
}

// =========================================================================================

export function makeMarker(pointList, searchForm) {
    var { kakao } = window;

    console.log(searchForm);

    api('/fishing/selectwhere?column=pointName&keyword=안동','get')
        .then(res => console.log(res));
    // if (!searchForm.column) {
    //     pointList = pointList.filter(e => e.pointName.includes(searchForm.keyword));
    //     console.log('aaaaaaaa');
    // } 

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
            console.log(place.pointAddr);
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
                '<div style="padding:5px;font-size:12px;height:70px">' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">${place.pointName}</span>`
                + '<br>' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">[${place.pointDesc}]</span>`
                + place.pointAddr
                + '</div>');
            infowindow.open(map, marker);
        });
    }


    // var marker = new kakao.maps.Marker({
    //     // 지도 중심좌표에 마커를 생성합니다 
    //     position: map.getCenter()
    // });

    // var geocoder = new kakao.maps.services.Geocoder();
    // // 지도에 클릭 이벤트를 등록합니다
    // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    // kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    //     // 클릭한 위도, 경도 정보를 가져옵니다 
    //     var latlng = mouseEvent.latLng;
    //     // 마커 위치를 클릭한 위치로 옮깁니다
    //     marker.setPosition(latlng);

    //     var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //     message += '경도는 ' + latlng.getLng() + ' 입니다';
    //     console.log(message);

    //     searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
    //         if (status === kakao.maps.services.Status.OK) {
    //             var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
    //             detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

    //             var content =
    //                 detailAddr

    //             // 마커를 클릭한 위치에 표시합니다 
    //             marker.setPosition(mouseEvent.latLng);
    //             marker.setMap(map);

    //             console.log(content);

    //         }
    //     });
    // });

    // function searchDetailAddrFromCoords(coords, callback) {
    //     // 좌표로 법정동 상세 주소 정보를 요청합니다
    //     geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    // }

}











export function makeMarker2(searchForm) {
    var { kakao } = window;

    console.log(searchForm);

    let pointList = null;
    api('/fishing/selectwhere?column=pointName&keyword=안동', 'get')
        .then(res => console.log(res));
    // if (!searchForm.column) {
    //     pointList = pointList.filter(e => e.pointName.includes(searchForm.keyword));
    //     console.log('aaaaaaaa');
    // } 

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
            console.log(place.pointAddr);
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent(
                '<div style="padding:5px;font-size:12px;height:70px">' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">${place.pointName}</span>`
                + '<br>' +
                `<span style="font-weight:bold; display: inline-block; text-align: center; width: 100%;">[${place.pointDesc}]</span>`
                + place.pointAddr
                + '</div>');
            infowindow.open(map, marker);
        });
    }


    // var marker = new kakao.maps.Marker({
    //     // 지도 중심좌표에 마커를 생성합니다 
    //     position: map.getCenter()
    // });

    // var geocoder = new kakao.maps.services.Geocoder();
    // // 지도에 클릭 이벤트를 등록합니다
    // // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    // kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
    //     // 클릭한 위도, 경도 정보를 가져옵니다 
    //     var latlng = mouseEvent.latLng;
    //     // 마커 위치를 클릭한 위치로 옮깁니다
    //     marker.setPosition(latlng);

    //     var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //     message += '경도는 ' + latlng.getLng() + ' 입니다';
    //     console.log(message);

    //     searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
    //         if (status === kakao.maps.services.Status.OK) {
    //             var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
    //             detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';

    //             var content =
    //                 detailAddr

    //             // 마커를 클릭한 위치에 표시합니다 
    //             marker.setPosition(mouseEvent.latLng);
    //             marker.setMap(map);

    //             console.log(content);

    //         }
    //     });
    // });

    // function searchDetailAddrFromCoords(coords, callback) {
    //     // 좌표로 법정동 상세 주소 정보를 요청합니다
    //     geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    // }

}

