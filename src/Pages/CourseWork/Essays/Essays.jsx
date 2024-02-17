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
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div`
    h1 {
    }
`;
