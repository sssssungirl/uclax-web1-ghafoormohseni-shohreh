import styled from "styled-components";

import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <ul>
                    <li>
                        <b>HTML:</b> Hypertext Markup Language: Mark up content,
                        defines the content.
                    </li>
                    <li>
                        <b>CSS:</b> Cascading Style Sheets: Aesthetics and
                        visual components, layout.
                    </li>
                    <li>
                        <b>JavaScript:</b> Functionality/behavior interactive,
                        DOM Manupulation, event listeners, state.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <ul>
                    <li>
                        <b>Git:</b> Version Control system, tracking changes,
                        feature branches, multiple developers to work with each
                        other on the same code without stepping on each others
                        toes.
                    </li>
                    <li>
                        <b>Github:</b> Web based platform built around git to
                        collaborate, store repos, and social interaction, code
                        reviews, tracking and management.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={
                    "Q3: What is the difference between JQuery and React?"
                }
            >
                <ul>
                    <li>
                        <b>JQuery:</b> is a JavaScript library primarily used
                        for DOM manipulation and simplifying AJAX requests.
                    </li>
                    <li>
                        <b>React:</b> is a JavaScript library for building user
                        interfaces using a component-based architecture.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a  Front-End and Back-End Developer?`}
            >
                <p>
                    <b>Front-end and back-end development</b> are two of today's
                    most ubiquitous specialization areas of web development.
                    <b>Front-end development</b> is a development specialty that
                    focuses on any part of a web page, software package, or web
                    application that a user interacts with. This speciality of
                    web development, is also known as client-side development.
                    <b>Back-end development</b> (also known as server-side
                    development) is a development specialty that focuses on the
                    back-end engine that powers the website or application.
                    Websites require server infrastructure, applications, and
                    databases to run properly, this is where back-end
                    development comes into play.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q5: What is the difference between Absolute, Root and Document Relative linking?`}
            >
                <p>
                    Absolute linking specifies the complete URL or path to a
                    resource from the domain root, while root-relative linking
                    specifies the path from the website's root directory.
                    Document-relative linking specifies the path relative to the
                    location of the HTML document itself. Each method offers
                    different levels of flexibility and convenience in managing
                    links within a website.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <p>
                    JPG, GIF, PNG, and SVG are different types of image formats.
                </p>
                <ul>
                    <li>
                        <b>JPG:</b> Best for photographs and complex images with
                        lots of colors. It uses lossy compression, meaning some
                        image quality may be lost to reduce file size.
                    </li>
                    <li>
                        <b>GIF:</b> Ideal for simple images, graphics, and
                        animations. It supports transparency and animation but
                        has a limited color palette, making it less suitable for
                        photographs.
                    </li>
                    <li>
                        <b>PNG:</b> Good for images with sharp edges, text, or
                        graphics. It supports transparency and lossless
                        compression, meaning no quality is lost when the image
                        is compressed. It's commonly used for web graphics and
                        images with transparent backgrounds.
                    </li>
                    <li>
                        <b>SVG:</b> Scalable Vector Graphics are not raster
                        images like JPG, GIF, and PNG. Instead, they're vector
                        graphics, which means they're based on mathematical
                        formulas defining shapes and paths. SVGs are
                        resolution-independent and can be scaled to any size
                        without losing quality. They're ideal for logos, icons,
                        and graphics that need to be resized frequently without
                        losing clarity.
                    </li>
                </ul>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Product Owner, Business Analyst, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                <ul>
                    <li>
                        <b>Product Manager:</b> Sets the overall vision and
                        strategy for the product.
                    </li>
                    <li>
                        <b>Product Owner:</b> Represents the customer's needs
                        and priorities to the development team.
                    </li>
                    <li>
                        <b>Business Analyst:</b> Analyzes and defines the
                        business requirements for the product.
                    </li>
                    <li>
                        <b>Scrum Master:</b> Facilitates the Scrum process and
                        helps the team work efficiently.
                    </li>
                    <li>
                        <b>UX Designer:</b> Designs the user experience and
                        interface of the product.
                    </li>
                    <li>
                        <b>Developer/Engineer:</b> Builds and codes the product
                        features.
                    </li>
                    <li>
                        <b>QA/SDET:</b> Tests the product to ensure quality and
                        functionality.
                    </li>
                    <li>
                        <b>DevOps:</b> Manages the deployment and infrastructure
                        of the product.
                    </li>
                </ul>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div`
    h1 {
    }
`;
