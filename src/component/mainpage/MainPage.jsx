import React from 'react';
import { useInView } from 'react-intersection-observer';
import style from './css/MainPage.module.css';
import NavBar from '../publicpage/NavBar';
import Footer from '../publicpage/Footer';
import Header from './js/Header';
import Up from '../publicpage/Up';

// Lazy Load 컴포넌트
const MainProduct = React.lazy(() => import('./js/MainProduct'));
const Review = React.lazy(() => import('./js/Review'));
const SubProduct = React.lazy(() => import('./js/SubProduct'));
const Info = React.lazy(() => import('./js/Info'));
const Connect = React.lazy(() => import('./js/Connect'));

export default function MainPage() {
  // Lazy Loading 상태 관리
  const [MainProductRef, MainProductInView] = useInView({ triggerOnce: true });
  const [ReviewRef, ReviewInView] = useInView({ triggerOnce: true });
  const [SubProductRef, SubProductInView] = useInView({ triggerOnce: true });
  const [InfoRef, InfoInView] = useInView({ triggerOnce: true });
  const [ConnectRef, ConnectInView] = useInView({ triggerOnce: true });

  const mainPageSections = [
    { id: 'home-section', name: '메인' },
    { id: 'main-section', name: '최근소식' },
    { id: 'sub-section', name: '기업문화' },
    { id: 'review-section', name: '사업분야' },
    { id: 'info-section', name: '기업소개' },
    { id: 'connect-section', name: '제휴문의' },
  ];

  return (
    <div className={style.container}>
      {/* 네비게이션 */}
      <NavBar title="Main Page" sections={mainPageSections} />
      {/* 헤더 */}
      <section id="home-section">
        <Header />
      </section>
      {/* 컨텐츠 */}
      <div className={style.contentContainer}>

        {/* MainProduct Lazy Loading */}
        <section id="main-section">
          <div className={style.semijump}></div>
          <div ref={MainProductRef} style={{ minHeight: '200px' }}>
            {MainProductInView && (
              <React.Suspense fallback={<div></div>}>
                <MainProduct />
              </React.Suspense>
            )}
          </div>
        </section>


        {/* SubProduct Lazy Loading */}
        <section id="sub-section">
          <div className={style.jump}></div>
          <div ref={SubProductRef} style={{ minHeight: '200px' }}>
            {SubProductInView && (
              <React.Suspense fallback={<div></div>}>
                <SubProduct />
              </React.Suspense>
            )}
          </div>
        </section>


        {/* Review Lazy Loading */}
        <section id="review-section">
          <div className={style.jump}></div>
          <div ref={ReviewRef} style={{ minHeight: '200px' }}>
            {ReviewInView && (
              <React.Suspense fallback={<div></div>}>
                <Review />
              </React.Suspense>
            )}
          </div>
        </section>


        {/* Info Lazy Loading */}
        <section id="info-section">
          <div className={style.semijump}></div>
          <div ref={InfoRef} style={{ minHeight: '200px' }}>
            {InfoInView && (
              <React.Suspense fallback={<div></div>}>
                <Info />
              </React.Suspense>
            )}
          </div>
        </section>


        {/* Connect Lazy Loading */}
        <section id="connect-section">
          <div className={style.semijump}></div>
          <div ref={ConnectRef} style={{ minHeight: '200px' }}>
            {ConnectInView && (
              <React.Suspense fallback={<div></div>}>
                <Connect />
              </React.Suspense>
            )}
          </div>
        </section>

        <div className={style.jump}></div>
      </div>

      <Up />
      {/* 푸터 */}
      <Footer />
    </div>
  );
}
