import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { 
    myContainer,
    heading,
    siteTitle,
    myBody
} from './layout.module.css'

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
    margin: 0 0.25rem;

    &.active {
        background-color: rebeccapurple;
        color: white;
    }
`


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
        <div className={myBody}>
            <div className={myContainer}>
                <header className={siteTitle}>{data.site.siteMetadata.title}</header>
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
                            <NavLink to="/val_comp"
                                activeClassName="active"
                            >
                                Valheim Companion App
                            </NavLink>
                        </li>
                    </NavList>
                </nav>
                <main>
                    <h1 className={heading}>{pageTitle}</h1>
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout