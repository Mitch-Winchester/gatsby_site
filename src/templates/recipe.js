import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const InfoCol = styled(Col)`
    justify-content: center;
    text-align: center;
    align-items: center;
`;
const IngCol = styled(Col)`
    padding: 2rem;
    background-color: rgb(94, 102, 111);
    border-radius: 30px;
    color: lightgrey;
`;
const IngHead = styled.h2`
    margin: 0 0 0.6em 0;
    padding: 0 0 0.6em 0;
    border-bottom: 2px solid rebeccapurple;
`;
const IngItem = styled.div`
    margin: 0 0 0.6em 0;
    padding: 0 0 0.6em 0;
    border-bottom: 2px solid rebeccapurple;
`;
const RecCol = styled(Col)`
    padding: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <img 
                        src={recipe.mediaImage.mediaImage.url} 
                        alt={recipe.title}
                        className="img-fluid"
                    />
                </Col>
                <InfoCol xs={12} md={6}>
                    <Row>
                        <Col>
                            <p><strong>Preparation Time:</strong></p>
                            <p>{recipe.preparationTime} minutes</p>
                        </Col>
                        <Col>
                            <p><strong>Cooking Time:</strong></p>
                            <p>{recipe.cookingTime} minutes</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>Number of Servings:</strong></p>
                            <p>{recipe.numberOfServings}</p>  
                        </Col>
                        <Col>
                            <p><strong>Difficulty:</strong></p>
                            <p>{recipe.difficulty}</p>  
                        </Col>
                    </Row>
                </InfoCol>
            </Row>
            <div style={{margin: "2rem"}}></div>
            <Row>
                <IngCol xs={12} sm={6} md={6} lg={4}>
                    <IngHead>Ingredients:</IngHead>
                    {recipe.ingredients?.map((ingredient, ingIndex) => (
                        <IngItem key={ingIndex}>{ingredient}</IngItem>
                    ))}
                </IngCol>
                <RecCol xs={12} sm={6} md={6} lg={8}>
                    <h2>Recipe Instructions:</h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction?.processed }}></p>
                </RecCol>
            </Row>
        </Layout>
    )
}

export default Recipe
