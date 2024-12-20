import React from "react";
import style from "./css/BrandStory.module.css";

export default function BrandStory() {
    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump} />
            <h1 className={style.title}>Brand Story</h1>
            <div className={style.BSContentsContainer}>
                <img src="/image/free-icon-skill-development-6322923.png" className={style.BSImage} alt="Brand Story" />
                {/* 저작권 표시
                    지도 아이콘 제작자: Aficons studio - Flaticon
                */}
                <div className={style.BSText}>
                    <h2 className={style.titleText}>전문 기술인과 IT 기술력을 갖춘 TorahWare</h2>
                    <ul className={style.contentText}>
                        <li>전문 기술인력 및 정규직 중심으로 고객의 Digital Business 사업을 수행합니다.</li>
                        <li>제조/유통/금융/교육/옥션 등 다양한 산업 분야의 정보시스템 구축 및 업무 프로세스에 대한 이해를 보유하고 있습니다.</li>
                        <li>표준화된 업무 프로세스를 적용하고, 프로젝트의 시작부터 종료 시점까지 PMO 및 QA조직을 통한 철저한 품질관리로 성공적인 프로젝트를 보장합니다.</li>
                        <li>전문 기술인 양성을 위한 신규 채용과 교육 훈련, 지속적 역량 강화를 통한 기술력 강화합니다.</li>
                    </ul>
                </div>
                <div className={style.BSText}>
                    <h2 className={style.titleText}>IT서비스 통합 수행 경험과 전문 역량</h2>
                    <ul>
                        <li className={style.contentText}>토라웨어는 분석/UI설계/디자인/시스템 구축까지 분야별 전문 기술력을 갖춘 디지털 서비스 전문기업입니다.</li>
                    </ul>
                </div>
                <img src="/image/free-icon-competencies-18492539.png" className={style.BSImage} />
                {/* 저작권 표시
                    역량 아이콘 제작자: AGE - Flaticon
                */}
            </div>
            <section id="2-section"></section>
            <div className={style.semiJump}></div>
            <h2 className={style.BSTitleOuttro}>Value Chain</h2>
            <img src="/image/torahware_intro.png" className={style.BSImageOuttro} />

        </div>
    );
}
