import style from './css/Connect.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faN, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Connect() {
    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>제휴문의</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>함께 성장하는 길을 찾습니다</p>
            </div>
            <div className={style.jump} />
            <div className={style.contentContainer}>
                <FontAwesomeIcon icon={faInstagram} className={`${style.icon} ${style['icon-instagram']}`} />
                <FontAwesomeIcon icon={faFacebookF} className={`${style.icon} ${style['icon-facebook']}`} />
                <FontAwesomeIcon icon={faGoogle} className={`${style.icon} ${style['icon-google']}`} />
                <FontAwesomeIcon icon={faN} className={`${style.icon} ${style['icon-n']}`} />
                <FontAwesomeIcon icon={faPhone} className={`${style.icon} ${style['icon-phone']}`} />
            </div>
        </div>
    );
}
