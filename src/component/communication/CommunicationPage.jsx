import React, { useEffect, useState } from "react";
import style from './css/CommunicationPage.module.css';
import NavBar from "../publicpage/NavBar";
import Up from '../publicpage/Up';
import Footer from "../publicpage/Footer";
import axios from "axios";
import { NavLink, useNavigate, Link } from 'react-router-dom';

export default function CommunicationPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const CommunicationPageSections = [
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
      });
  }, []);

  const openPopup = () => {
    if (localStorage.getItem("username") != null){
      axios.post('http://localhost:39090/api/inquiry/select', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("username")}`
        }
      })
        .then(response => {
          // 받아온 데이터로 state 업데이트
          setName(response.data.name);
          setEmail(response.data.email);
          // 팝업 열기
          setShowPopup(true);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  };

  const closePopup = () => setShowPopup(false);

  const handleRowClick = (id) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  const inquiry = () => {
    axios.post('http://localhost:39090/api/inquiry/insert', {
      messageTitle: document.querySelector('input[placeholder="제목을 입력해주세요."]').value,
      messageContent: document.querySelector('textarea[placeholder="문의하실 내용을 입력해주세요."]').value
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("username")}`
      }
    })
      .then(response => {
        console.log(response);
        closePopup();
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className={style.container}>
      <NavBar title="Login Page" sections={CommunicationPageSections} />
      {/* 헤더 */}
      <section id="home-section">
        <div className={style.headerContainer}>
          <img src="/image/IMG_4691.jpeg" className={style.homeImg} alt="Header" />
        </div>
      </section>

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
                    <div dangerouslySetInnerHTML={{ __html: row.description }} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <button className={style.btn} onClick={openPopup}>문의하기</button>

      {showPopup && (
        <div className={style.popup}>
          <div className={style.popupInner}>
            <h1>문의하기</h1>
            <table>
              <tbody>
                <tr>
                  <td>이름</td>
                  <td>
                    <input
                      type="text"
                      placeholder="이름"
                      className={style.inputBox}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      readOnly={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>이메일</td>
                  <td>
                    <input
                      type="text"
                      placeholder="이메일"
                      className={style.inputBox}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      readOnly={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>제목</td>
                  <td>
                    <input
                      type="text"
                      placeholder="제목을 입력해주세요."
                      className={style.inputBox}
                    />
                  </td>
                </tr>
                <tr>
                  <td>내용</td>
                  <td>
                    <textarea
                      placeholder="문의하실 내용을 입력해주세요."
                      className={style.messageContents}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className={style.popupButtons}>
              <button onClick={closePopup} className={style.popBtn1}>닫기</button>
              <button className={style.popBtn2} onClick={inquiry}>전송</button>
            </div>
          </div>
        </div>
      )}

      <Up />
      <Footer />
    </div>
  );
}
