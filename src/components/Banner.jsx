import React from "react";

function Banner({title,src1,src2}) {
    return <div className="banner">
        {title && <h2 className="banner__title">{title}</h2>}
        <picture className="banner__content">
            <source srcSet={src2} media="(max-width: 500px)" />
            <img src={src1} alt="Image de paysage" fetchPriority="high" />
        </picture>
    </div>
}

export default Banner;