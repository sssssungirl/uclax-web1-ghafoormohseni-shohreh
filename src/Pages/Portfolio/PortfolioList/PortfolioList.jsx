import styled from "styled-components";

import { portfolioData } from "../portfolioData.js";

import PortfolioItem from "./PortfolioItem.jsx";

const PortfolioList = () => {
    return (
        <PortfolioListStyled>
            {portfolioData.map((member) => {
                return <PortfolioItem key={member.id} member={member} />;
            })}
        </PortfolioListStyled>
    );
};

export default PortfolioList;

const PortfolioListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;
