import styles from "./SectionBar.module.css";
import seta from "../../assets/Fill With Left Arrow.png";
import Counter from "../counter/Counter";

function SectionBar({title, isCarrossel, haveCounter}) {
    let circle = (
        <div className={styles.circles}>
            <div>
                <img src={seta} alt=""/><img className={styles.rotate} src={seta} alt=""/>
            </div>
        </div>
    );
    if (!isCarrossel) circle = null;

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h2 className={styles.title}>{title}</h2>
                {haveCounter && <div className={styles.counter}><Counter/></div>}
            </div>
            {circle}
        </div>
    );
}

export default SectionBar;
