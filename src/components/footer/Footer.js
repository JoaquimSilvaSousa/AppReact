import styles from "./Footer.module.css";

function Footer({appQrCode, imgSocialMedia}) {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <h1 className={styles.title}>Exclusive</h1>
                <p className={styles.subtitle}>Subscribe</p>
                <p className={styles.text}>Get 10% yout first order</p>
            </div>
            <div className={styles.container}>
                <p className={styles.subtitle}>Support</p>
                <p className={styles.text}>11 Bijoy sarani, Dhaka,Dh 1515, Bangladesh.</p>
                <p className={styles.text}>exclusive@gmail.com</p>
                <p className={styles.text}>+88015-88888-9999</p>
            </div>
            <div className={styles.container}>
                <p className={styles.text}>Account</p>
                <p className={styles.text}>My account</p>
                <p className={styles.text}>Login / Register</p>
                <p className={styles.text}>Cart</p>
                <p className={styles.text}>Wishlist</p>
                <p className={styles.text}>Shop</p>
            </div>
            <div className={styles.container}>
                <p className={styles.text}>Quick Link</p>
                <p className={styles.text}>Privacy Policy</p>
                <p className={styles.text}>Term Of Use</p>
                <p className={styles.text}>FAQ</p>
                <p className={styles.text}>Contact</p>
            </div>
            <div className={styles.container}>
                <p className={styles.text}>Download App</p>
                <p className={styles.subtitleApp}>Save $3 with App New User Only</p>
                <img src={appQrCode}/>
                <img src={imgSocialMedia}/>
            </div>
        </div>
    )
}

export default Footer;