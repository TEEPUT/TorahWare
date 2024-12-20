import style from './css/ShopPage.module.css'
import NavBar from "../publicpage/NavBar";
import ProductList from './js/ProductList';
import Footer from '../publicpage/Footer'
import ProductListAll from './js/ProductListAll';
import Up from '../publicpage/Up';


export default function ShopPage() {
    const shopPageSections = [
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
        { id: '', name: '' },
    ];

    return (
        <div className={style.container}>

            {/* 네비게이션 */}
            <NavBar title="About Page" sections={shopPageSections} className={style.Nav} ></NavBar>

            {/* 헤더 */}
            <section id="home-section">
                <div className={style.headerContainer}>
                    <img src="/image/2023032912445846083_Nero AI_Photo_Face.jpeg" className={style.homeImg} alt="Header" />
                </div>
            </section>
            <section id="1-section" />
            {/* <ProductList /> */}
            <ProductListAll />

            <div className={style.semiJump}></div>

            {/* 상위로 이동 */}
            <Up />
            {/* 푸터 */}
            <Footer />
        </div>
    )
}