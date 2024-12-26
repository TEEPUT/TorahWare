import style from './css/Footer.module.css';

export default function footer() {
    return (
        <div className={style.container}>
            <div className={style.subContainer}><img src='/image/footer_logo.png' className={style.logo}></img></div>
            <div className={style.subContainer}>
                <div className={style.content}>개인정보처리방침</div>
                <div className={style.content}>이메일무단수집거부</div>
                <div className={style.content}>찾아오시는길</div>
            </div>
            <div className={style.subContainer}>
                <img src='/image/footer_icon.png'></img>
            </div>
        </div>
    )
}