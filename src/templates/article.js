import * as React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { Layout, Img } from '../components/layout'

const NormalText = styled.p`
    font-size: 1rem;
`;
const ImgCon = styled(Container)`
    justify-content: center;
    width: fit-content;
`;

const Article = ({ pageContext }) => {
    const { article } = pageContext

    return (
        <Layout pageTitle={article.title}>
            <div>
                <p>
                    <strong>By:</strong>&nbsp;&nbsp;
                    {article.author.displayName}
                </p>
                <p>
                    <strong>Date:</strong>&nbsp;&nbsp;
                    {new Date(article.created).toDateString()}
                </p>
            </div>
            <ImgCon>
                <Img 
                    src={article.mediaImage.mediaImage.url} 
                    alt={article.title}
                    className="img-fluid"
                />
            </ImgCon>
            <div>
                <NormalText data-testid="test-body"
                dangerouslySetInnerHTML={{ __html: article.body?.processed }}>
                </NormalText>
            </div>
        </Layout>
    )
}

export default Article