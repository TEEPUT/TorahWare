import React, { useState } from "react";
import style from "./css/ProductListAll.module.css";


export default function ProductListAll() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const productData = [
        { id: 1, name: "삼성전자 서버 안정화 조치", description: "삼성전자 MOSAIC 서버 안정화를 위한 캐시서버 / 파일서버 등 구축", period: "2023.11.23 ~ 2024.04.07", imageSrc: "/image/sam.png" },
        { id: 2, name: "삼성로지텍 국내 고객 푸쉬 메시지 구조 및 디자인 리뉴얼", description: "삼성전자로지텍 푸쉬 메세지 시스템 구조 개선 및 독립화 구축", period: "2023.07.28 ~ 2023.12.31", imageSrc: "/image/samlo.png" },
        { id: 3, name: "삼성전자 MX사업부 해킹정보유출 관제시스템 운영", description: "삼성전자 MX사업부 해킹정보유출 관제시스템 운영", period: "2023.06.01 ~ 2023.06.30", imageSrc: "/image/sam.png" },
        { id: 4, name: "CJ APOLO 기능개선", description: "CJ 대한통운 물류시스템 고도화", period: "2023.05.18 ~ 2023.12.31", imageSrc: "/image/cj.png" },
        { id: 5, name: "삼성전자 MX제조현장설비관제 EDM플랫폼 개발", description: "삼성전자 MX제조현장설비관제 EDM플랫폼 개발", period: "2023.05.15 ~ 2023.08.14", imageSrc: "/image/sam.png" },
        { id: 6, name: "삼성전자 MOSAIC NASCA 인증로직 개선", description: "MOSAIC 화면캡쳐방지 인증 로직개선 및 개인정보 노출제거", period: "2023.01.25 ~ 2023.04.24", imageSrc: "/image/sam.png" },
        { id: 7, name: "삼성전자 고객경험커뮤니티 구축", description: "삼성전자 제품 사용에 대한 고객 경험 커뮤니티 신규 구축", period: "2022.09.01 ~ 2023.01.20", imageSrc: "/image/sam.png" },
        { id: 8, name: "삼성전자 MOSAIC Survey 고도화 및 개인정보 보호 강화", description: "MOSAIC Survey 고도화 및 글로벌 개인정보 보호강화 정책 적용", period: "2022.07.03 ~ 2023.01.20", imageSrc: "/image/sam.png" },
        { id: 9, name: "삼성전자 CPCex 기술자료제공서 NDA 전자서명 기능적용 개발", description: "CPCex 기술자료제공서 NDA 전자서명 로직 적용 및 기능 고도화", period: "2022.03.23 ~ 2022.08.05", imageSrc: "/image/sam.png" },
        { id: 10, name: "풍산화동양행(주) ITO Service", description: "화동닷컴/화동옥션닷컴 ITO Service", period: "2022.08.01 ~ 2023.07.31", imageSrc: "/image/hwa.png" },
        { id: 11, name: "Samsung Research 홍보 사이트 운영", description: "사이트 기획 및 디자인 & 홍보 컨텐츠 관리", period: "2022.01.03 ~ 2024.05.31", imageSrc: "/image/sam.png" },
        { id: 12, name: "홈플러스 마케팅 플랫폼 메뉴 디자인 & 목업", description: "마케팅 플랫폼 메뉴 디자인 & 목업 구축", period: "2021.08.02 ~ 2021.09.30", imageSrc: "/image/home.png" },
        { id: 13, name: "삼성전자 모바일 SCI 설문시스템 개발", description: "모바일 SCI 설문시스템 개발", period: "2021.04.16 ~ 2021.08.15", imageSrc: "/image/sam.png" },
        { id: 14, name: "ORP 연구소 WIB개발 구축 프로젝트", description: "WIB개발 구축 프로젝트", period: "2020.03.01 ~ 2020.06.30", imageSrc: "/image/orp.png" },
        { id: 15, name: "삼성메디슨 법무시스템 개발", description: "삼성메디슨 법무시스템 개발", period: "2020.03.01 ~ 2020.04.30", imageSrc: "/image/sammedison.png" },
        { id: 16, name: "삼성글로벌 배포관리 툴 구축", description: "삼성글로벌 배포관리 툴 구축", period: "2020.02.01 ~ 2020.03.31", imageSrc: "/image/sam.png" },
        { id: 17, name: "아모레퍼시픽 카카오링크 개발", description: "아모레퍼시픽 카카오링크 개발", period: "2019.12.01 ~ 2020.02.29", imageSrc: "/image/APwordmark.png" },
        { id: 18, name: "삼성메디슨 업무지원 포털시스템 개발 구축", description: "업무지원 포털시스템 개발 구축", period: "2019.09.01 ~ 2019.11.30", imageSrc: "/image/sammedison.png" },
        { id: 19, name: "KIOST 연구비 연계시스템 고도화", description: "연구비 연계시스템 고도화", period: "2019.09.01 ~ 2019.10.31", imageSrc: "/image/kP0l0la4R1oqQlbgMneJeQ5awgb4M8Bh94P10YDuC03_-L0wnCoMt8I8PqHp3kIXfM_XBgX-a18DxstH_7XOwQ.svg" },
        { id: 20, name: "삼성전자 무선사 요구분석 관리시스템 구축", description: "무선사 요구분석 관리 시스템 구축", period: "2019.08.01 ~ 2019.12.31", imageSrc: "/image/sam.png" },
    ];
    

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className={style.container}>
            <div className={style.semiJump}></div>
            <h2 className={style.title}>Product List</h2>
            <div className={style.productContainer}>
                {productData.map((product) => (
                    <div
                        key={product.id}
                        className={style.product}
                        onClick={() => handleProductClick(product)}
                    >
                        <img
                            src={product.imageSrc}
                            className={style.productImage}
                            alt={product.name}
                        />
                        <div className={style.textBox}>{product.name}</div>
                    </div>
                ))}
            </div>

            {/* Popup for Product Details */}
            {selectedProduct && (
                <div className={style.popupOverlay} onClick={handleClosePopup}>
                    <div
                        className={style.popupContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className={style.closeButton} onClick={handleClosePopup}>
                            X
                        </button>
                        <img
                            src={selectedProduct.imageSrc} // 팝업에도 해당 이미지 사용
                            className={style.popupImage}
                            alt={selectedProduct.name}
                        />
                        <div className={style.infoText}>
                            <h2>{selectedProduct.name}</h2>
                            <p>{selectedProduct.description}</p>
                            <p>{selectedProduct.period}</p>
                            <div className={style.shopIcon}>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={style.semiJump}></div>
        </div>
    );
}
