import React, { useState, useEffect } from "react";
import style from "./css/Info.module.css";

export default function Info() {
    const [counts, setCounts] = useState([0, 0, 0, 0]); // 초기값 0

    // 목표 값, 제목, 단위 설정
    const targetCounts = [2013, 18, 82, 100];
    const titles = ["설립 연도", "직원 수", "성공한 프로젝트", "성공률"];
    const units = ["년", "명", "개", "%"];

    useEffect(() => {
        // 숫자를 점진적으로 증가시키는 함수
        const animateCounts = () => {
            const duration = 3000; // 애니메이션 지속 시간 (ms)
            const frameRate = 51; // 초당 프레임
            const totalFrames = Math.round((duration / 800) * frameRate); // 총 프레임 수
            const increments = targetCounts.map(target => target / totalFrames); // 프레임당 증가량

            let frame = 0;

            const interval = setInterval(() => {
                frame++;
                setCounts(prevCounts =>
                    prevCounts.map((count, i) =>
                        Math.min(count + increments[i], targetCounts[i]) // 목표값 초과 방지
                    )
                );

                if (frame >= totalFrames) {
                    clearInterval(interval); // 애니메이션 종료
                }
            }, 1000 / frameRate);
        };

        animateCounts();
    }, []); // 컴포넌트가 마운트될 때 한 번 실행

    return (
        <div>
            <div className={style.header}>
                <h1 className={style.devider}>기업소개</h1>
                <img src="/image/devider.png" className={style.devider} alt="Divider" />
                <p className={style.devider}>숫자로 보는 우리의 발자취</p>
            </div>
            <div className={style.container}>
                {targetCounts.map((target, index) => (
                    <div key={index} className={style.textBox}>
                        <div className={style.textTitle}>{titles[index]}</div>
                        <div className={style.textContent}>
                            <div className={style.textCount}>{Math.floor(counts[index])}</div>
                            <div className={style.textUnit}>{units[index]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
