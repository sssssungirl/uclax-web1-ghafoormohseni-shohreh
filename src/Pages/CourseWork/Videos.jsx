import styled from "styled-components";

import React from "react";
import ReactPlayer from "react-player/youtube";

const Videos = () => {
    return (
        <VideosStyled>
            <h2>Butterflies</h2>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=x7lV8WJVJn4"
                width="100%"
                height="100%"
                margin="20px"
            />
        </VideosStyled>
    );
};

export default Videos;

const VideosStyled = styled.div`
    h2 {
        color: #4a4a4a;
    }
    margin-bottom: 20px;
    aspect-ratio: 4 / 1.5;
`;
