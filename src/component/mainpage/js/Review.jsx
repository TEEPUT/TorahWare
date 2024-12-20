import style from './css/Review.module.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Review() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={style.container}>
            <div className={style.blur}></div>
                <div className={style.header}>
                    <h1 className={style.title}>사업분야</h1>
                    <img src="/image/devider.png" className={style.image} alt="Divider" />
                    <p className={style.text}>새로운 가치 창출</p>
                </div>
                <Slider {...settings} className={style.maxbox}>
                    <div>
                        <h3> 디지털 비즈니스 </h3> <p> 기업의 디지털 비즈니스 파트너 토라웨어는 다양한 산업 분야의<br/> 고객 니즈에 맞춰 디즈털 비즈니스 혁신을 주도하고 있습니다. </p>
                    </div>
                    <div>
                        <h3> 금융 IT 서비스 </h3> <p> 토라웨어는 금융 산업의 전문성과 특화된 IT 기술력으로<br/> 금융 디지털 비즈니스 혁신을 주도하고 있습니다. </p>
                    </div>
                    <div>
                        <h3> 이커머스 </h3> <p> 토라웨어는 전문 경험과 기술력으로 e-Commerce 플랫폼 구축과<br/> 운영 서비스를 제공하고 있습니다. </p>
                    </div>
                    <div>
                        <h3> 라이브 옥션 </h3> <p> 토라웨어는 Auction과 IT기술을 융합하여<br/> 온-오프라인 라이브 옥션 플랫폼을 구축하여 운영하고 있습니다. </p>
                    </div>
                </Slider>
        </div>
    );
}
