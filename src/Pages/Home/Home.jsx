import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

const Home = () => {
    return (
        <HomeStyled>
            <Inset>
                <h1>Home</h1>
                <Slideshow />
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        display: none;
    }
`;
