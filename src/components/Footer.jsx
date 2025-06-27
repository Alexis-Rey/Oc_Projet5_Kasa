import React from "react";
import footerDesktop from "../assets/footer-desk.webp";
import footerTab from "../assets/footer-tab.webp";
import footerMob from "../assets/footer-mob.webp";

function Footer() {
    return <div className="footer">
        <picture>
            <source srcSet={footerMob} media="(max-width: 700px)" />
            <img src={footerDesktop} alt="Pied de page du site Kasa avec logo et copyright" width={1441} height={210} />
        </picture>
    </div>
};

export default Footer;