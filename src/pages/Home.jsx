import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

function Home() {
    return <div className="home">
        <section className="home-banner">
            <Banner title="Chez vous, partout et ailleurs" />
        </section>
        <section className="home-cards">
            <Cards />
        </section>
    </div>
};

export default Home;