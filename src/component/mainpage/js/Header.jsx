import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './css/Header.module.css';

export default function Header() {
    const [imageSrc, setImageSrc] = useState('/image/bg.png');
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        setIsLoading(true); // API 호출 전 로딩 상태 활성화
        axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: '48a61a76b0644f2ab7df7986f2894038',
            }
        })
            .then(response => {
                if (response.data && response.data.results && response.data.results.length > 0) {
                    const bgImage = response.data.results[Math.floor(Math.random() * 20)].background_image;
                    console.log(bgImage);
                    if (bgImage) {
                        setImageSrc(bgImage);
                    }
                }
            })
            .catch(error => {
                console.error('Error fetching image from RAWG:', error);
            })
            .finally(() => {
                setIsLoading(false); // API 호출 종료 후 로딩 상태 비활성화
            });
    }, []);

    if (isLoading) {
        // 로딩 상태일 때 표시할 화면
        return (
            <div className={style.loadingContainer}>
                <p className={style.loadingText}>Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <img src="/image/main_digital_bg.png" className={style.headerImage} alt="Header Background" />
            <div className={style.headerBlur}></div>
            <div className={style.wrapper}>
                <div className={style.focus}>
                    Torah Ware
                </div>
                <div className={style.mask}>
                    <div className={style.text}>Torah Ware</div>
                </div>
            </div>
        </div>
    );
}
