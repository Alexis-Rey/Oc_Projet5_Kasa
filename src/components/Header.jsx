import React from "react";
import logoDesktop from "../assets/logo-desk.webp";
import logoMobile from "../assets/logo-mob.webp";
import { NavLink } from "react-router-dom";

const liens = [
    {to: "/", label:"Accueil", end: true},
    {to:"/a-propos", label:"À propos"}
];

function Header() {
    return <header>
        <div className="header">
            <h1 className="header__logo">
                <picture>
                    <source srcSet={logoMobile} media="(max-width: 700px)" />
                    <img src={logoDesktop} alt="Logo de l'entreprise Kasa" width={211} height={68} />
                </picture>
            </h1>
            <nav>
                {liens.map(({to,label,end}) => {
                    return <NavLink className="nav__link" key={to} to={to} end={end}>{label}</ NavLink>  
                })}
            </nav>
        </div>
    </header>
};

export default Header;