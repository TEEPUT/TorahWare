import style from './css/Footer.module.css';

export default function footer() {
    return (
        <div className={style.container}>
            <div className={style.subContainer}><img src='/image/logo.png' className={style.logo}></img></div>
            <div className={style.subContainer}>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
            </div>
            <div className={style.subContainer}>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
                <div className={style.content}>subContents</div>
            </div>
        </div>
    )
}