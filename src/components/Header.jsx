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
                    /* ici end sert à indiquer que accueil est seulement actif sur sa page car on ne veut pas qu'il le soit sur la page à propos, en somme comme la page accueil
                    et à propos commence tout les deux par / cela permet de s'assurer que c'est bien en tapant / de facon exacte qu'on va sur accueil */
                    return <NavLink className="nav__link" key={to} to={to} end={end}>{label}</ NavLink>  
                })}
            </nav>
        </div>
    </header>
};

export default Header;