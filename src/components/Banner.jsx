import React from "react";

function Banner({title,src1,src2}) {
    return <div className="banner">
        <h2 className="banner__title">{title}</h2>
        <picture className="banner__content">
            <source srcSet={src2} media="(max-width: 700px)" />
            <img src={src1} />
        </picture>
    </div>
}

export default Banner;