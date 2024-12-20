import { useEffect, useState } from 'react';
import style from './css/SubProduct.module.css';
import axios from 'axios';

export default function SubProduct() {
    const [games, setGames] = useState([]); // 상태 정의 수정

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games`, {
            params: {
                key: '48a61a76b0644f2ab7df7986f2894038',
                ordering: '-image',
            },
            headers: {
                'User-Agent': 'YourAppName/1.0',
            },
        })
            .then(response => {
                const result = response.data.results; // API 데이터의 results 배열
                console.log('Fetched games:', result);
                setGames(result); // 상태 업데이트
            })
            .catch(error => {
                console.error('Error fetching games:', error);
            });
    }, []);

    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>문화</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>우리가 함께 만들어가는 가치</p>
            </div>

            <div className={style.semijump}></div>

            <div className={style.container}>
                <div className={style.subcontainer1}>
                    <div className={style.mainImage}>
                        <div className={style.subImageBox3}>
                            <div>Our Principles</div>
                            <div className={style.subText}>정직함, 책임감, 신실함이라는 원칙</div>
                        </div>
                        <img
                            src="/image/main__culture01_m.png"
                            className={style.subImageBox2}
                            alt="main__culture01_m"
                        />
                    </div>
                    <div className={style.mainImage}>
                        <div className={style.subImageBox3}>
                            <div>Work and Play Balance</div>
                            <div className={style.subText}>일과 휴식의 균형</div>
                        </div>
                        <img
                            src="/image/main__culture02_m.png"
                            className={style.subImageBox2}
                            alt="main__culture02_m"
                        />
                    </div>
                </div>
                <div className={style.subcontainer2}>
                    <div className={style.mainImage}>
                        <img
                            src="/image/main__culture03_m.png"
                            className={style.subImageBox2}
                            alt="main__culture03_m"
                        />
                        <div className={style.subImageBox1}>
                            <div>Strong Teamwork</div>
                            <div className={style.subText}>팀워크로 만들어가는 성공</div>
                        </div>
                    </div>
                    <div className={style.mainImage}>
                        <img
                            src="/image/main__culture04_m.png"
                            className={style.subImageBox2}
                            alt="main__culture04_m"
                        />
                        <div className={style.subImageBox1}>
                            <div>Growth through work</div>
                            <div className={style.subText}>일을 통한 성장과 성취감</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
