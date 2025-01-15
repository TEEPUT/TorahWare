import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import MainPage from "./component/mainpage/MainPage";
import AboutPage from './component/about/AboutPage';
import ShopPage from './component/shop/ShopPage';
import CommunicationPage from './component/communication/CommunicationPage';
import LoginPage from './component/login/LoginPage';
import AdminPage from './component/admin/AdminPage';
import AdminCheck from './component/admin/AdminCheck';

// ScrollToTop 컴포넌트
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 경로가 변경될 때 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      {/* ScrollToTop을 라우트 변경 감지에 사용 */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ShopPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/admin' element={<AdminCheck />} />
        <Route path='/admin/2d2422d6bb36efa869201c399cb44f4354c50b86229bfca8036c5816fa97b24b' element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
