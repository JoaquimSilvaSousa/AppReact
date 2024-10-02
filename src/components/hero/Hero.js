import React from "react";
import hero from "../../assets/hero.png";
import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.hero}>
            <img src={hero} alt="" />
        </div>
    );
}

export default Hero;