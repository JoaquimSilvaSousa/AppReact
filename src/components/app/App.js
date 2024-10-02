import {useState} from "react";
import logo from "../../assets/logo.svg";
import styles from "./App.module.css";
import Header from "../header/Header.js";
import Promo from "../promo/Promo.js";
import cart from "../../assets/cart.png";
import lupa from "../../assets/lupa.png";
import wishlist from "../../assets/Wishlist.png";
import Hero from "../hero/Hero";
import Subtitle from "../subtitle/Subtitle";
import SectionBar from "../sectionBar/SectionBar";
import Product from "../product/Product";
import controle from "../../assets/controle.png"
import Button from "../button/Button";
import Category from "../category/Category";
import cellphone from "../../assets/Category-CellPhone.png";
import jbl from "../../assets/Frame 600.png";
import ProductsGrid from "../productsGrid/ProductsGrid";
import imgPs5 from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import mulher from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import alexa from "../../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";
import perfume from "../../assets/652e82cd70aa6522dd785109a455904c.png";
import Benefit from "../benefit/Benefit";
import imgDelivery from "../../assets/Services.png";
import imgCustomer from "../../assets/Services(1).png";
import imgGuarantee from '../../assets/Services(2).png';
import Footer from "../footer/Footer";
import appQrCode from "../../assets/Frame 719.png";
import imgSocialMedia from "../../assets/Frame 741.png";
import Counter from "../counter/Counter";
import computer from "../../assets/Category-Computer.png";
import smartwatch from "../../assets/Category-SmartWatch.png";
import camera from "../../assets/Category-Camera.png";
import headphones from "../../assets/Category-Headphone.png";
import gaming from "../../assets/Category-Gamepad.png";
import teclado from "../../assets/ak-900-01-500x500 1.png";
import monitor from "../../assets/g27cq4-500x500 1.png";
import cadeira from "../../assets/cadeira.png";

function App() {
    return <>
        <Promo
            linkAddress="https://google.com"
            languages={["English", "Português"]}/>
        <Header
            srcBusca={lupa}
            srcCarrinho={cart}
            srcFavorito={wishlist}/>
        <Hero/>

        <div className={styles.subtitle}>
            <Subtitle
                text={"Today's"}/>
        </div>

        <SectionBar
            title={"Flash Sales"}
            isCarrossel={true}
            haveCounter={true}/>
        <div className={styles.products}>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"-40%"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={teclado}
                alt={"Teclado"}
                discount={"-35%"}
                price={"$960"}
                priceBeforePromo={"$1160"}
                title={"AK-900 Wired Keyboard"}
                numFeedbacks={"75"}
                numStars={4}/>
            <Product
                isPromo={true}
                imgSrc={monitor}
                alt={"<Monitor>"}
                discount={"-30%"}
                price={"$378"}
                priceBeforePromo={"$400"}
                title={"IPS LCD Gaming Monitor"}
                numFeedbacks={"99"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={cadeira}
                alt={"Cadeira"}
                discount={"-25%"}
                price={"$375"}
                priceBeforePromo={"$400"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"99"}
                numStars={5}/>
        </div>

        <div className={styles.button}>
            <Button
                text={"View All Products"}/>
        </div>

        <hr className={styles.hr}/>

        <div className={styles.subtitle}>
            <Subtitle
                text={"Categories"}/>
        </div>
        <SectionBar
            title={"Browse By Category"}
            isCarrossel={true}
            haveCounter={false}/>
        <div className={styles.category}>
            <Category
                imgSrc={cellphone}
                title={"Phones"}
                isSelected={false}/>
            <Category
                imgSrc={computer}
                title={"Computers"}
                isSelected={false}/>
            <Category
                imgSrc={smartwatch}
                title={"SmartWatch"}
                isSelected={false}/>
            <Category
                imgSrc={camera}
                title={"Camera"}
                isSelected={true}/>
            <Category
                imgSrc={headphones}
                title={"HeadPhones"}
                isSelected={false}/>
            <Category
                imgSrc={gaming}
                title={"Gaming"}
                isSelected={false}/>
        </div>
        <div className={styles.button}>
            <Button
                text={"View All Products"}/>
        </div>
        <hr className={styles.hr}/>

        <div className={styles.subtitle}>
            <Subtitle
                text={"This Month"}/>
        </div>
        <div className={styles.container}>
            <SectionBar
                className={styles.subtitleButtonRight}
                title={"Best Selling Products"}
                isCarrossel={false}
                haveCounter={false}
            />
            <div className={styles.buttonRight}>
                <Button text={"View All Products"}/>
            </div>
        </div>
        <div className={styles.products}>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
        </div>

        <div className={styles.jbl}>
            <img src={jbl} alt={"jbl"}/>
        </div>

        <div className={styles.subtitle}>
            <Subtitle
                text={"Today's"}/>
        </div>
        <SectionBar
            title={"Flash Sales"}
            isCarrossel={true}
            haveCounter={false}/>
        <div className={styles.products}>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
        </div>
        <div className={styles.products}>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
            <Product
                isPromo={true}
                imgSrc={controle}
                alt={"Controle"}
                discount={"A"}
                price={"$120"}
                priceBeforePromo={"$160"}
                title={"HAVIT HV-G92 Gamepad"}
                numFeedbacks={"88"}
                numStars={5}/>
        </div>
        <div className={styles.button}>
            <Button
                text={"View All Products"}/>
        </div>

        <div className={styles.subtitle}>
            <Subtitle
                text={"Today's"}/>
        </div>
        <SectionBar
            title={"Flash Sales"}
            isCarrossel={false}
            haveCounter={false}/>

        <div className={styles.productsGrid}>
            <ProductsGrid
                title1={"Playstation 5"}
                subtitle1={"Black and White version of the PS5 coming out on sale."}
                imgSrc1={imgPs5}
                title2={"Women’s Collections"}
                subtitle2={"Featured woman collections that give you another vibe."}
                imgSrc2={mulher}
                title3={"Speakers"}
                subtitle3={"Amazon wireless speakers"}
                imgSrc3={alexa}
                title4={"Perfume"}
                subtitle4={"GUCCI INTENSE OUD EDP"}
                imgSrc4={perfume}/>
        </div>

        <div className={styles.benefits}>
            <Benefit
                imgSrc={imgDelivery}
                title={"FREE AND FAST DELIVERY"}
                text={"Free delivery for all orders over $140"}/>
            <Benefit
                imgSrc={imgCustomer}
                title={"24/7 CUSTOMER SERVICE"}
                text={"Friendly 24/7 customer support"}/>
            <Benefit
                imgSrc={imgGuarantee}
                title={"MONEY BACK GUARANTEE"}
                text={"We reurn money within 30 days"}/>
        </div>

        <Footer
            appQrCode={appQrCode}
            imgSocialMedia={imgSocialMedia}/>
    </>
}

export default App;
