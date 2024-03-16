import { useState } from "react";
import styled from "styled-components";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";
import Hamburger from "./Hamburger.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />
            {showMenu && <MainMenu onClick={hideMenu} />}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }

    nav {
        text-align: center;
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 140px;

        z-index: 100;

        background-color: #a8a8a8;

        a {
            display: block;

            padding: 10px;
            border-bottom: solid 1px #999999;

            color: #000000;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #f3ec1a;
            }
        }
    }
`;
