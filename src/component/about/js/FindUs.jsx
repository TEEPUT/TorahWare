import React, { useEffect } from "react";
import style from "./css/FindUs.module.css";

const { kakao } = window;

export default function FindUs() {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.3284398, 126.9533474),
            level: 3,
        };


        const map = new kakao.maps.Map(container, options);


        const markerPosition = new kakao.maps.LatLng(37.3284398, 126.9533474);
        const marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        marker.setMap(map);
    }, []);

    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump}></div>
            <h1 className={style.title}>Find Us</h1>
            <div className={style.FUContainer}>
                {/* 지도 영역 */}
                <div id="map" className={style.map}></div>
                <p className={style.info}>Tel. <br /> 010-1234-1234</p>
                <p className={style.info}>Address. <br />경기도 의왕시 오봉산단3로 25 더리브비즈원지식산업센터 1동 316,317호</p>
            </div>
            <section id="2-section"></section>
        </div>
    );
}
