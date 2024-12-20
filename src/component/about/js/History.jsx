import React from "react";
import style from "./css/History.module.css";

export default function History() {
    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump}></div>
            <h1 className={style.title}>History</h1>
            <p className={style.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            <p className={style.subTitle}>incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.</p>
            <div className={style.semiJump}></div>
            <div className={style.HContainer}>
                <div className={style.HLine}></div>
                <img src="/image/image.png" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2024.06</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={style.HText}>
                    <h2>2023.08</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <img src="/image/image.png" className={style.HImage}></img>
                <section id="2-section"></section>
                <img src="/image/image.png" className={style.HImage}></img>
                <div className={style.HText}>
                    <h2>2022.02</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className={style.semiJump} />
        </div>
    );
}
