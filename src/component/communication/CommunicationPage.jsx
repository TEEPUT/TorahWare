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
        { id: 8, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 7, title: "Lorem ipsum dolor sit amet, consectetur adipis", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 6, title: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 5, title: "Lorem ipsum dolor sit amet", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 4, title: "Lorem ipsum dolor sit amet, consectetur adipiscing", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 3, title: "Lorem ipsum dolor sit amet, consectetur", date: "2024.12.04", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 2, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", date: "2024.08.21", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
        { id: 1, title: "Lorem ipsum dolor sit amet, consectetur", date: "2024.05.24", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum" },
    ];

    const handleRowClick = (id) => {
        setSelectedRow(selectedRow === id ? null : id); // 클릭된 행 번호를 토글
    };

    return (
        <div className={style.container}>
            {/* 네비게이션 */}
            <NavBar title="About Page" sections={communicationPageSections} className={style.Nav} ></NavBar>

            {/* 헤더 */}
            <section id="home-section">
                <div className={style.headerContainer}>
                    <img src="/image/IMG_4691.jpeg" className={style.homeImg} alt="Header" />
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
                            <tr onClick={() => handleRowClick(row.id)} className={style.clickableRow}>
                                <td className={style.tableNumber}>{row.id}</td>
                                <td className={style.tableTitle}>{row.title}</td>
                                <td className={style.tableDate}>{row.date}</td>
                            </tr>
                            {selectedRow === row.id && (
                                <tr className={style.expandedRow}>
                                    <td colSpan="3" className={style.tableContent}>{row.description}</td>
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
