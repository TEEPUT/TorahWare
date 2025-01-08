import React, { useEffect, useState } from "react";
import style from './css/CommunicationPage.module.css';
import NavBar from "../publicpage/NavBar";
import Up from '../publicpage/Up';
import Footer from "../publicpage/Footer";
import axios from "axios";

export default function CommunicationPage() {
    const [selectedRow, setSelectedRow] = useState(null);
    const [tableData, setTableData] = useState([]);

    const communicationPageSections = [
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },

    ];

    useEffect(() => {
      axios.get('http://localhost:39090/api/communication')
      .then(response => {
        setTableData(response.data.list);
      })
      .catch(error => {
        console.error('데이터 로드 중 오류 발생: ', error);
      })
    }, [])

    

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
