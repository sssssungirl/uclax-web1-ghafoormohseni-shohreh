import styled from "styled-components";
import PortfolioVideo from "./PortfolioList/PortfolioVideo";

import PortfolioList from "./PortfolioList/PortfolioList";

import Inset from "@/Common/PagesLayout/Inset.jsx";

const Portfolio = () => {
    return (
        <PortfolioStyled>
            <Inset>
                <h1>ShoDesign Portfolio</h1>
                <PortfolioVideo />
                <PortfolioList />
            </Inset>
        </PortfolioStyled>
    );
};

export default Portfolio;

const PortfolioStyled = styled.div``;
