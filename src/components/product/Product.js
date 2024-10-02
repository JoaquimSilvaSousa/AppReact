import styles from './Product.module.css'
import fivestar from '../../assets/fivestar.png'
import fourstar from '../../assets/fourstar.png'
import React from 'react';

function Product({isPromo, imgSrc, alt, discount, price, priceBeforePromo, title, numFeedbacks, numStars}) {
    let img = fourstar
    if (numStars === 5) {
        img = fivestar
    }

    return (
        <div>
            <p className={styles.discount}>{discount}</p>
            <div className={styles.image}>
                <img src={imgSrc} alt={alt}></img>
            </div>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.prices}>
                <h1 className={styles.price}>{price}</h1>
                {isPromo ? <del className={styles.del}>{priceBeforePromo}</del> : null}
            </div>
            <div className={styles.stars}>
                <img src={img} alt="cinco estrelas"/>
                <p>({numFeedbacks})</p>
            </div>
        </div>
    );
}

export default Product;