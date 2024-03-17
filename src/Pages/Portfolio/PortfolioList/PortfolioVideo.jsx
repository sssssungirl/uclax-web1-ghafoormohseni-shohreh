import styled from "styled-components";

import React from "react";
import ReactPlayer from "react-player/youtube";

const Videos = () => {
    return (
        <VideosStyled>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=x7lV8WJVJn4"
                width="100%"
                height="100%"
            />
        </VideosStyled>
    );
};

export default Videos;

const VideosStyled = styled.div`
    aspect-ratio: 4 / 1.5;
    margin-bottom: 20px;
`;
