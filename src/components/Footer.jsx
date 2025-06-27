import React from "react";
import footerDesktop from "../assets/footer-desk.webp";
import footerMob from "../assets/footer-mob.webp";

function Footer() {
    return <footer>
        <div className="footer">
            <picture>
                <source srcSet={footerMob} media="(max-width: 700px)" />
                <img src={footerDesktop} alt="Pied de page du site Kasa avec logo et copyright" loading="lazy" width={1441} height={210} />
            </picture>
        </div>
    </footer>    
};

export default Footer;