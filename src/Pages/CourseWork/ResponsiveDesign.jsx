import styled from "styled-components";

import { breakpoints, useMediaQuery } from "@/Common/useMediaQuery";

const ResponsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled>
            <h2>Responsive Design</h2>

            <div className="boxes">
                {isMediumAndUp && <div className="box box1">1</div>}
                <div className="box box1">2</div>
                <div className="box box1">3</div>
            </div>
        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const ResponsiveDesignStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }

    .box {
        width: 100%;
        max-width: 200px;
        height: 200px;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        color: white;
        margin: 10px;
    }
    .box2 {
        border-radius: 40px;
    }
    .box3 {
        border-radius: 100px;
    }

    @media ${breakpoints.isMediumAndUp} {
        .box {
            background-color: indigo;
        }
    }
    @media ${breakpoints.isLargeAndUp} {
        .box {
            background-color: green;
        }
    }
`;
