import styles from "./Benefit.module.css";

function Benefit({imgSrc, title, text}) {
    return (
        <div className={styles.container}>
            <img src={imgSrc} className={styles.img}></img>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    );
}

export default Benefit;