import { useState } from "react";
import styles from './Header.module.css';

function Header({srcBusca, srcFavorito, srcCarrinho}) {
    return (
        <header className={styles.cabecalho}>
            <h1>Exclusive</h1>
            <nav>
                <ul className={styles.lista}>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
            <div className={styles.shop}>
                <div className={styles.busca}>
                    <input className={styles.campo}
                        type="text"
                        name=""
                        id=""
                        placeholder="What are you looking for?"
                    />
                    <img src={srcBusca} alt="" />
                </div>
                <img src={srcFavorito} alt="" className={styles.icone} />
                <img src={srcCarrinho} alt="" className={styles.icone} />
            </div>
        </header>
    );
}

export default Header;