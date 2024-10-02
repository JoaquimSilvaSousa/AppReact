import styles from "./Promo.module.css";

function Promo({linkAddress, languages}) {

    return (
        <div className={styles.barraPreta}>
            <p className={styles.p}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href={linkAddress} target='_blank' className={styles.a}>ShopNow</a>

            <select name='languages' id='languages' className={styles.select}>
                {languages.map( language =>
                    <option value={language} className={styles.option}>{language}</option>
                )}
            </select>
        </div>
    );
}

export default Promo;