import React from "react";
import styles from "./Subtitle.module.css";

function Subtitle({text}) {
    return (
        <div className={styles.container}>
            <div className={styles.ret}></div>
            <h3 className={styles.subtitulo}>{text}</h3>
        </div>
    );
}

export default Subtitle;