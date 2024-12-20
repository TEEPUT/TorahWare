import { useEffect, useState } from 'react';
import style from './css/MainProduct.module.css';
import axios from 'axios';

export default function MainProduct() {
    const [bgImage, setBgImage] = useState('/image/image.png');
    const [bgImagePlus, setBgImagePlus] = useState('/image/index_logo01.png'); // 'Plus'로 수정

    useEffect(() => {
        axios.get('https://api.rawg.io/api/games', {
            params: {
                key: '48a61a76b0644f2ab7df7986f2894038',
                ordering: '-metacritic',
                dates: '2015-01-01,2024-12-31'
            },
            headers: {
                'User-Agent': 'YourAppName/1.0'
            }
        })
        .then(response => {
            const result = response.data;
            console.log(result); // 응답 데이터 확인
            if (result && result.results && result.results.length > 0) {
                const firstGame = result.results[0];
                console.log('Main Image:', firstGame.background_image); // 첫 번째 배경 이미지
                console.log('Additional Image:', firstGame.image); // 추가 배경 이미지

                // 배경 이미지가 있는 경우만 상태 업데이트
                if (firstGame.background_image) {
                    setBgImage(firstGame.background_image);
                }
                if (firstGame.image) {
                    setBgImagePlus(firstGame.image);
                } else {
                    console.warn('image가 없습니다.');
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>최근소식</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>함께 써가는 현재진행형 이야기</p>
            </div>
            <div className={style.semijump}></div>
            <div className={style.container}>
                <img src="/image/467981930_18469478293029736_7624297038079088290_n.jpg" className={style.reviewBox1} alt="Review Box 1" />
                <div className={style.blurbox}></div>
                <img src="/image/IMG_4695.jpeg" className={style.reviewBox2} alt="Review Box 2" />
            </div>
        </div>
    );
}
