import React from "react";
import style from "./css/History.module.css";

export default function History() {
    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump}></div>
            <h1 className={style.title}>History</h1>
            <p className={style.subTitle}>Digital Business Partner TorahWare</p>
            <p className={style.subTitle}>미래를 만들어가는 토라웨어의 기록입니다.</p>
            <div className={style.semiJump}></div>
            <div className={style.HContainer}>
                <div className={style.HLine}></div>
                <div className={style.HText}>
                    <h2 className={style.subTextRight}>2023</h2>
                    <p className={style.subTextRight}>[여성가족부] 가족친화 기업 인증 획득<br/>[벤처기업] 혁신성장유형 벤처기업 확인<br/>삼성물산 시스템보안 공종프로그램개발 및 운영 /M&E기술연구개발 분야 협력사 등록<br/>[중소벤처기업부] 성과공유기업 인증<br/>[특허청] 직무발명보상 우수기업인증<br/>삼성전자 NASCA 인증 로직 개선 계약<br/>삼성전자 MOSAIC Survey 고도화 성공</p>
                </div>
                <img src="/image/2023032910060133603.jpg" className={style.HImage}></img>
                <img src="/image/2023032910260194818.jpg" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2022</h2>
                    <p>가종동반 송년모임, 하얏트 호텔 1박 2일<br/>특허출원[인공지능 실시간 경매 서비스]<br/>삼성전자 고객경험 커뮤니티 구축 계약<br/>삼성전자 MOSAIC Survey 고도화 계약<br/>전직원 워크샵, 제주도 2박 3일<br/>삼성증권 IB Front 시스템 구축 성공</p>
                </div>
                <div className={style.HText}>
                    <h2 className={style.subTextRight}>2021</h2>
                    <p className={style.subTextRight}>삼성 Research 및 Codeground 운영계약<br/>IBM 협력사 등록<br/>토라웨어 본사 이전<br/>삼성증권 IB Front 시스템구축 계약<br/>삼성증권 소비자보호 종합시스템 구축 성공</p>
                </div>
                <img src="/image/2023032910415570886.jpg" className={style.HImage}></img>
                <img src="/image/2023032912392016345.jpg" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2020</h2>
                    <p>삼성증권 소비자보호 종합시스템 구축 계약<br/>삼성증권 IT부문 협력사 등록<br/>토라웨어 기업부설연구소 설립<br/>가족동반 워크샵, BBQ 파티</p>
                </div>
                <div className={style.HText}>
                    <h2 className={style.subTextRight}>2017</h2>
                    <p className={style.subTextRight}>홈플러스 GHS+ 구축 완료<br/>삼성전자 MOSAIC Survey 고도화 사업 계약<br/>홈플러스 ITO 연간 계약</p>
                </div>
                <img src="/image/hpimg.jpg" className={style.HImage}></img>
                <img src="/image/hackers.png" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2016</h2>
                    <p>해커스어학원 챔프스터디 개선 완료</p>
                </div>
                <div className={style.HText}>
                    <h2 className={style.subTextRight}>2015</h2>
                    <p className={style.subTextRight}>토라웨어 본사 이전<br/>첫 가족동반 워크샵, 오사카 2박 3일 <br/> 해커스어학원 Regi 시스템 전면 개편 성공</p>
                </div>
                <img src="/image/2023032912564583029.jpg" className={style.HImage}></img>
                <img src="/image/og_image.jpg" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2014</h2>
                    <p>해커스교육그룹 통합정산시스템 구축 성공</p>
                </div>
                <div className={style.HText}>
                    <h2 className={style.subTextRight}>2013</h2>
                    <p className={style.subTextRight}>토라웨어㈜ 창립</p>
                </div>
                <img src="/image/logo2.png" className={style.HImage}></img>
            </div>
            <div className={style.semiJump} />
        </div>
    );
}
