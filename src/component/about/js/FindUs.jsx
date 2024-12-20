import React from "react";
import style from "./css/FindUs.module.css";

export default function FindUs() {
    return (
        <div>
            <section id="1-section"></section>
            <div className={style.semiJump}></div>
            <h1 className={style.title}>Find Us</h1>
            <div className={style.FUContainer}>
                <div className={style.map}></div>
                <p className={style.info}>Tel. <br /> 010-1234-1234</p>
                <p className={style.info}>Address. <br /> Lorem ipsum dolor</p>
                <p className={style.info}>E-mail.<br /> Loremip@sumdolor.com</p>
            </div>
            <section id="2-section"></section>
        </div>
    );
}
