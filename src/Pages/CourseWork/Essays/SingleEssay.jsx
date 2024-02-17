import styled from "styled-components";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #034444;

    h3 {
        background-color: #034444;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }

    .content {
        padding: 20px;
    }
`;
