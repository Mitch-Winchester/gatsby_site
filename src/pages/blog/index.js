import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, StyledLink } from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>
                            <StyledLink to={`/blog/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                            </StyledLink>
                        </h2>
                        <p><strong>Posted:</strong> {node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage