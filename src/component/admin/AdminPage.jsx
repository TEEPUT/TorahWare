import styles from './css/AdminPage.module.css';
import { useNavigate } from 'react-router-dom';
import React, { useState, Suspense } from "react";

export default function AdminPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Main");

  const Main = React.lazy(() => import('./js/AdminMain'));
  const Project = React.lazy(() => import('./js/AdminProject'));
  const Communication = React.lazy(() => import('./js/AdminCommunication'));
  const Member = React.lazy(() => import('./js/AdminMember'));

  const handleLogoClick = () => {
    navigate('/admin/2d2422d6bb36efa869201c399cb44f4354c50b86229bfca8036c5816fa97b24b');
  };

  const handleMenuClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Main":
        return <Main />;
      case "Project":
        return <Project />;
      case "Communication":
        return <Communication />;
      case "Member":
        return <Member />;
      default:
        return <div>content not found.</div>;
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img
          src="/image/logo.png"
          className={styles.logo}
          onClick={handleLogoClick}
          alt="logo"
        />
        
        <div
          className={
            activeSection === "Main"
              ? `${styles.option} ${styles.activeOption}`
              : styles.option
          }
          onClick={() => handleMenuClick("Main")}
        >
          메인
        </div>
        <div
          className={
            activeSection === "Project"
              ? `${styles.option} ${styles.activeOption}`
              : styles.option
          }
          onClick={() => handleMenuClick("Project")}
        >
          프로젝트
        </div>
        <div
          className={
            activeSection === "Communication"
              ? `${styles.option} ${styles.activeOption}`
              : styles.option
          }
          onClick={() => handleMenuClick("Communication")}
        >
          커뮤니케이션
        </div>
        <div
          className={
            activeSection === "Member"
              ? `${styles.option} ${styles.activeOption}`
              : styles.option
          }
          onClick={() => handleMenuClick("Member")}
        >
          유저관리
        </div>
      </div>
      
      <div className={styles.flexContainer}></div>
      <div className={styles.contentContainer}>
        <Suspense fallback={<div>로딩중...</div>}>
          {renderSectionContent()}
        </Suspense>
      </div>
    </div>
  );
}
