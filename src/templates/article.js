import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const NormalText = styled.p`
    font-size: 1rem;
`;

const NodeImage = styled.img`
    width: 100%;
`;

const Article = ({ pageContext }) => {
    const { article } = pageContext

    return (
        <Layout pageTitle={article.title}>
            <div>
                <p>By: {article.author.displayName}</p>
                <p>Date: {article.created}</p>
            </div>
            <div>
                <NodeImage 
                    src={article.mediaImage.mediaImage.url} 
                    alt={article.title}
                />
            </div>
            <div>
                <NormalText dangerouslySetInnerHTML={{ __html: article.body?.processed }}>
                </NormalText>
            </div>
        </Layout>
    )
}

export default Article