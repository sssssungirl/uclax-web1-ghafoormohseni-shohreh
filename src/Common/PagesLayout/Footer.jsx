import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "./Inset.jsx";
import SiteLogo from "./SiteLogo/SiteLogo.jsx";

const Footer = () => {
    return (
        <FooterStyled className="Footer">
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <a
                    href="https://www.linkedin.com/in/shohrehmohseni/"
                    target="LinkedIn"
                >
                    <img
                        src="https://i.postimg.cc/2SxgwRpx/Linked-In-01-01.png"
                        border="0"
                        alt="LinkedIn"
                    />
                </a>
                <h2>
                    ShoDesign: Peace, Love, Creativity, Fitness, Chill and
                    Respect | Professor Mitch Gohman
                </h2>
                <div className="copyright">
                    &copy; Winter 2024. UCLA-Web Design I: HTML, CSS and
                    JavaScript | Irvine, CA.
                </div>
            </Inset>
        </FooterStyled>
    );
};

export default Footer;

const FooterStyled = styled.footer`
    color: #c2c2c2;
    background-color: #efefef;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }

    h2 {
        color: #212121;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: #212121;
    }
`;
