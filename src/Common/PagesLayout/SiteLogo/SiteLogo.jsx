import React from "react";
import styled from "styled-components";
import { useState } from "react";

/* Images ---------------------------*/
import ShoLogo from "./Sho-Logo-01.png";
import ShoLogoHov from "./Sho-Logo-02.png";

const SiteLogo = () => {
    const [imgSrc, imgSrcUpdate] = useState(ShoLogoHov);

    const changeToShoLogo = () => {
        imgSrcUpdate(ShoLogo);
    };
    const changeToShoLogoHov = () => {
        imgSrcUpdate(ShoLogoHov);
    };
    return (
        <SiteLogoStyled>
            <img
                src={imgSrc}
                onMouseEnter={changeToShoLogo}
                onMouseLeave={changeToShoLogoHov}
            />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    text-align: center;
    color: #a8a8a8;
    width: 100%;
    height: 100%;

    img {
        width: 40%;
        height: auto;
    }
`;
