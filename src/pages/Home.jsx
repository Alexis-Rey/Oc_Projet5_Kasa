import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import src1 from "../assets/banner-desk-home.webp";
import src2 from "../assets/banner-mob-home.webp";

function Home() {
    return <div className="home">
        <section className="home-banner">
            <Banner title="Chez vous, partout et ailleurs" src1={src1} src2={src2} />
        </section>
        <section className="home-cards">
            <Cards />
        </section>
    </div>
};

export default Home;