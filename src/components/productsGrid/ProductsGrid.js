import styles from "./ProductsGrid.module.css";

function ProductsGrid({
                          title1,
                          subtitle1,
                          imgSrc1,
                          title2,
                          subtitle2,
                          imgSrc2,
                          title3,
                          subtitle3,
                          imgSrc3,
                          title4,
                          subtitle4,
                          imgSrc4
                      }) {
    return (
        <div className={styles.container}>
            <div className={styles.item1}>
                <img src={imgSrc1} className={styles.img}></img>
                <div className={styles.blocktext}>
                    <h1 className={styles.title}>{title1}</h1>
                    <p className={styles.subtitle}>{subtitle1}</p>
                    <p className={styles.shop}>Shop Now</p>
                </div>
            </div>
            <div className={styles.item2}>
                <img src={imgSrc2} className={styles.img2}></img>
                <div className={styles.blocktext}>
                    <h1 className={styles.title2}>{title2}</h1>
                    <p className={styles.subtitle}>{subtitle2}</p>
                    <p className={styles.shop}>Shop Now</p>
                </div>
            </div>
            <div className={styles.item3}>
                <img src={imgSrc3} className={styles.img}></img>
                <div className={styles.blocktext}>
                    <h1 className={styles.title3}>{title3}</h1>
                    <p className={styles.subtitle}>{subtitle3}</p>
                    <p className={styles.shop}>Shop Now</p>
                </div>
            </div>
            <div className={styles.item3}>
                <img src={imgSrc4} className={styles.img}></img>
                <div className={styles.blocktext}>
                    <h1 className={styles.title3}>{title4}</h1>
                    <p className={styles.subtitle}>{subtitle4}</p>
                    <p className={styles.shop}>Shop Now</p>
                </div>
            </div>
        </div>
    )
}

export default ProductsGrid