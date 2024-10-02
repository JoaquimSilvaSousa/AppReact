import styles from "./Category.module.css";

function Category({imgSrc, title, isSelected}) {
    let containerColor = "";
    let fontColor = "black";
    if (isSelected) {
        fontColor = "white";
        containerColor = "#DB4444";
    }
    return (
        <div className={styles.container} style={{backgroundColor: containerColor}}>
            <div className={styles.icon}>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className={styles.title} style={{color: fontColor}}>
                <h1>{title}</h1>
            </div>
        </div>
    );
}

export default Category;