import React, { useState } from "react";
import style from './css/CommunicationPage.module.css';
import NavBar from "../publicpage/NavBar";
import Up from '../publicpage/Up';
import Footer from "../publicpage/Footer";

export default function CommunicationPage() {
    const [selectedRow, setSelectedRow] = useState(null); // 현재 선택된 테이블 번호

    const communicationPageSections = [
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },

    ];

    const tableData = [
        { 
            id: 7, 
            title: "입사지원은 어떻게 하나요?", 
            date: "2024.12.25", 
            description: 
            "<h2>현재 진행중인 채용 공고는 아래 사이트에서 확인하실 수 있습니다.</h2>"+
            "<a href='https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/16527473' target=_blenk style='color:black; text-decoration:none;'>잡코리아 : https://www.jobkorea.co.kr/Recruit/Co_Read/C/16527473</a>"
        },
        { 
            id: 6, 
            title: "라이브 옥션는 어떻게 진행하나요?", 
            date: "2024.12.25", 
            description: 
            "<h3>온ᆞ오프라인 Live Auction 시스템 구축 및 운영 기술력</h3>"+
            "<h4 style='color:gray'>토라웨어는 Auction과 IT기술을 융합하여 On-Offline Live Auction 플랫폼을 구축하여 운영하고 있습니다.</h4>"+
            "<ol><li>On-Offline Live Auction 플랫폼 구축"+
            "<ul><li>토라웨어는 On-Offline Live Auction 플랫폼을 구축한 경험과 기술력을 보유하고 있습니다.</li><li>오프라인 현장에서 진행되는 경매를 사용자가 온라인에서도 동시에 경매에 참여할 수 있는 시스템으로, 실시간 영상을 통한 경매진행, 사용자들의 입찰과 참여와 최종 낙찰 확정까지 경매의 모든 프로세스를 시스템으로 구현하였습니다.</li></ul></li>"+
            "<li>AI Auction 플랫폼 구축<ul><li>Live Auction 플랫폼 기반에 음성합성 기술을 적용하여, 경매 진행자 없이, 자동으로 경매가 진행되도록 시스템을 구현하였습니다.</li></ul></li></ol>"
        },
        { 
            id: 5, 
            title: "이커머스는 어떻게 진행하나요?", 
            date: "2024.12.25", 
            description: 
            "<h3>고객 요구 기반의 e-Commerce 시스템 구축 기술력</h3>"+
            "<h4 style='color:gray'>토라웨어는 전문 경험과 기술력으로 e-Commerce 플랫품 구축과 운영 서비스를 제공하고 있습니다.</h4>"+
            "<ol><li>대형 온라인 마켓, 전문몰 등 e-Commerce 분야 구축"+
            "<ul><li>토라웨어는 e-Commerce 시스템의 전체 프로세스와 단위 업무, 최신 기술 동향에 대한 이해와 경험을 보유하고 있습니다.</li><li>구축 분야는 대형 온라인몰과 전문 제품몰이며, 전문 제품몰은 고객요구사항을 기반으로 시스템을 설계하여 전체 시스템을 구축하였고, 대형온라인몰은 AS-IS 분석기반으로 기능개선 구축을 수행하였습니다.</li></ul></li>"+
            "<li>e-Commerce 운영"+
            "<ul><li>홈플러스, 골든듀 등 커머스 시스템 운영 관리 다녀간 수행하였습니다.</li><li>풍산화동양행 온라인몰 ITO서비스 수행 하고 있습니다.</li></ul></li></ol>"
        },
        { 
            id: 4, 
            title: "금융 IT 서비스는 어떻게 진행하나요?", 
            date: "2024.12.25", 
            description: 
            "<h3>IB 분야 전문성과 특수성에 대한 이해와 구축 기술력</h3>"+
            "<h4 style='color:gray'>토라웨어는 금융 산업의 전문성과 특화된 IT 기술력으로 금융 디지털 비즈니스 혁신을 주도하고 있습니다.</h4>"+
            "<ol><li>IB 시스템 구축"+
            "<ul><li>IB의 영입부터 진행관리, 평가관리, 운영관리까지 통합 관리 체계를 구현하여 IB 부분 데이터를 자산화 가능하도록 구현했습니다.</li><li>금융사 내부시스템과 연계를 통한 Deal 단계별 손익관리/평가 체계를 구축하였습니다.</li><li>IB 분야의 전문성과 특수성에 대해 이해와 구축 기술력을 보유하고 있습니다.</li></ul></li></ol>"
        },
        { 
            id: 3, 
            title: "디지털 비즈니스는 어떻게 진행하나요?", 
            date: "2024.12.25", 
            description: 
            "<h3>통합 업무 프로세스 기반의 IT 서비스 수행 경험과 전문 역량</h3>"+
            "<h4 style='color:gray'>기업의 디지털 비즈니스 파트너 토라웨어는 다양한 산업 분야의 고객 니즈에 맞춰 디지털 비즈니스 혁신을 주도하고 있습니다.</h4>" +
            "<ol><li>전문 기술인재들로 구성된 프로젝트 수행"+
            "<ul><li>토라웨어는 정규직 중심으로 프로젝트 팀을 구성하여 고객의 Digital Business 프로젝트를 수행합니다.</li><li>기획/UI/UX개발/시스템개발/품질개발 등 정보시스템 구축에 필요한 모든 분야의 전문 기술인력을 보유하고 있습니다.</li></ul></li><br/>"+
            "<li>IT시스템 구축의 통합 프로세스를 아우르는 경험과 기술력"+
            "<ul><li>SI사업의 전체 프로세스 직접 수행 경험 풍부기술 분야별 전문 인력들이 프로젝트 성공적으로 수행하고 있습니다.</li><li>고객 요구분석부터 비즈니스 설계, UI설계, 시스템 설계, 시스템 구축까지 등 전체 분야를 직접 수행합니다.</li><li>전자/금융/제조/유통/서비스/교육 등 다양한 산업 분야의 정보 시스템 구축한 기술력과 산업에 대해 이해와 경험을 보유하고 있습니다.</li></ul></li><br/>"+
            "<li>고객중심의 철저한 품질관리"+
            "<ul><li>프로젝트 시작부터 종료 시점까지 PMO/QA 조직을 톨한 철저한 품질관리 자체적으로 실행합니다.</li><li>고객 요구사항 대비 프로젝트 결과물 충족도 평가 및 관리합니다.</li><li>표준화된 프로젝트 관리 방법론을 적용한 품질관리로 정보시스템 구축사업의 품질을 높이고 있습니다.</li></ul></li></ol><br/>" +
            "<img src='/image/field_digitalBusiness.png' style='width:100%';=/>"
         },
        { 
            id: 2, 
            title: "토라웨어의 핵심 가치는 무엇인가요?", 
            date: "2024.12.25", 
            description: 
            "<ol><li>토라웨어는 정직합니다. 토라웨어는 고객과 동료들, 직원들 앞에서 정직하게 일합니다.</li><br/>" +
            "<li>토라웨어는 책임을 다합니다. 토라웨어는 고객의 프로젝트에 책임을 다하며 고객과의 약속을 지키고, 고객의 기대해 부응하는 결과를 제공합니다.</li><br/>" +
            "<li>토라웨어는 신실합니다. 토라웨어는 모든 일에 신실합니다. 회사의 경영부터 고객의 프로젝트까지 우리에게 맡겨진 모든 영역에서 신실합니다.</li></ol>" 
        },
        { 
            id: 1, 
            title: "토라웨어의 비전은 무엇인가요?", 
            date: "2024.12.25", 
            description: 
            "<h4>다함께 부자가 되는 기업, 다함께 미래를 만드는 기업, 토라웨어는 비전을 현실로 만들어가고 있습니다.<br/></h4>"+
            "<ol><li>실력 있는 디지털비즈니스 파트너기업으로 토라웨어는 디지털비즈니스 분야의 Top Tier가 될것입니다.</li> <br/>"+
            "<li>인재를 키우고 육성하는 기업으로 토라웨어는 인재들에게 성장과 발전의 기회를 제공하고, 인재 발궁과 육성에 집중합니다.</li> <br/>"+
            "<li>나눔을 실천하는 기업입니다 토라웨어는 기업의 수익을 임직원과 나누고, 기업의 사회적 공헌을 위해 힘씁니다.</li></ol>" 
        },
    ];

    const handleRowClick = (id) => {
        setSelectedRow(selectedRow === id ? null : id); // 클릭된 행 번호를 토글
    };

    return (
        <div className={style.container}>
          {/* 네비게이션 */}
          <NavBar
            title="About Page"
            sections={communicationPageSections}
            className={style.Nav}
          />
          {/* 헤더 */}
          <section id="home-section">
            <div className={style.headerContainer}>
              <img
                src="/image/IMG_4691.jpeg"
                className={style.homeImg}
                alt="Header"
              />
            </div>
          </section>
          <section id="1-section" />
          <div className={style.semiJump}></div>
          <h2 className={style.title}>Communication</h2>
          <div className={style.semiJump}></div>
    
          <table className={style.table}>
            <thead className={style.thead}>
              <tr className={style.clickableRow}>
                <th className={style.tableNumber}>번호</th>
                <th className={style.tableTitle}>제목</th>
                <th className={style.tableDate}>날짜</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <React.Fragment key={row.id}>
                  <tr
                    onClick={() => handleRowClick(row.id)}
                    className={style.clickableRow}
                  >
                    <td className={style.tableNumber}>{row.id}</td>
                    <td className={style.tableTitle}>{row.title}</td>
                    <td className={style.tableDate}>{row.date}</td>
                  </tr>
                  {selectedRow === row.id && (
                    <tr className={style.expandedRow}>
                      <td colSpan="3" className={style.tableContent}>
                        {/* description을 HTML로 렌더링 */}
                        <div
                          dangerouslySetInnerHTML={{ __html: row.description }}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
    
          <div className={style.jump}></div>
          {/* 상위로 이동 */}
          <Up />
          {/* 푸터 */}
          <Footer />
        </div>
      );
}
