import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'

const Img = styled.img`
    border-radius: 30px;
    margin-bottom: 2rem;
`;
const StyledLink = styled(Link)`
    color: rgb(94, 102, 111);

    &:hover {
        background-color: rgb(102, 51, 153, 0.5);
        color: lightgrey;
    }
`;
const LayCon = styled(Container)`
    margin: 2rem auto;
    font-family: sans-serif;
    background-color: lightgrey;
    border: 4px solid black;
    border-radius: 30px;
    padding: 3rem;
    box-shadow: 0 0 20px 10px black;
    max-width: 60vw;

    @media (max-width: 1920px) {
        max-width: 70vw;
    }

    @media (max-width: 768px) {
        padding: 2rem;
        max-width: 80vw;
    }
    
    @media (max-width: 576px) {
        margin: 2rem auto;
        max-width: 90vw;
        padding: 1rem;
    }
`;
const BodyCon = styled(Container)`
    background-color: rgb(94, 102, 111);
    min-height: 100vh;
    overflow: auto;
`;
const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: auto auto 1rem;

    li {
        margin-bottom: 0.5rem;
    }
`;
const NavLink = styled(Link)`
    color: black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 0.25rem;
    margin: 0 0.5rem;

    &:hover {
        background-color: rgb(102, 51, 153, 0.5);
        color: white;
    }

    &.active {
        background-color: rebeccapurple;
        color: white;
    }
`;
const SiteHead = styled.header`
    font-size: 5vw;
    color: rgb(94, 102, 111);
    font-weight: 700;
    margin: 3rem auto;
    text-align: center;
    display: flex;
    justify-content: center center;
    width: fit-content;

    @media (max-width: 1920px) {
        font-size: 6vw;
    }

    @media (max-width: 576px) {
        font-size: 8vw;
    }
`;
const PageHead = styled.h1`
    color: rebeccapurple;
    margin: 3rem auto;
    display: flex;
    justify-content: center center;
    text-align: center;
    width: fit-content;
`;


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <BodyCon fluid>
            <LayCon>
                <SiteHead>{data.site.siteMetadata.title}</SiteHead>
                <nav>
                    <NavList className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/"
                                activeClassName="active"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about"
                                activeClassName="active"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog"
                                activeClassName="active"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/recipes"
                                activeClassName="active"
                            >
                                Recipes
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/articles"
                                activeClassName="active"
                            >
                                Articles
                            </NavLink>
                        </li>
                    </NavList>
                    <NavList className="nav nav-pills">
                        <li className="nav-item">
                            <NavLink to="/val_comp/src/pages"
                                activeClassName="active"
                            >
                                Valheim Companion App
                            </NavLink>
                        </li>
                    </NavList>
                </nav>
                <main>
                    <PageHead>{pageTitle}</PageHead>
                    {children}
                </main>
            </LayCon>
        </BodyCon>
    )
}

export { Layout, Img, StyledLink }