import * as React from 'react'
import { Layout, Img } from '../components/layout'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const InfoCol = styled(Col)`
    justify-content: center;
    text-align: center;
    align-items: center;
`;
const InfoSpacer = styled.div`
    margin-bottom: 4rem;

    @media (max-width: 992px) {
        margin-bottom: 2rem;
    }
    @media (max-width: 576px) {
        margin-bottom: 1rem;
    }
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
const RecSum = styled.p`
    text-align: center;
    margin-bottom: 2rem;
`;

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
            <RecSum dangerouslySetInnerHTML={{ __html: recipe.summary?.processed }}></RecSum>
            <Row className="align-items-center">
                <Col xs={12} lg={6}>
                    <Img 
                        src={recipe.mediaImage.mediaImage.url} 
                        alt={recipe.title}
                        className="img-fluid"
                    />
                </Col>
                <InfoCol xs={12} lg={6}>
                    <Row>
                        <Col>
                            <img 
                                src='/images/recipeInfo/knife.svg' 
                                height={'50px'}
                                alt='PrepKnife'
                                ></img>
                            <p><strong>Preparation Time:</strong></p>
                            <p>{recipe.preparationTime} minutes</p>
                        </Col>
                        <Col>
                        <img
                            src='/images/recipeInfo/timer.svg'
                            height={'50px'}
                            alt='EggTimer'
                            ></img>
                            <p><strong>Cooking Time:</strong></p>
                            <p>{recipe.cookingTime} minutes</p>
                        </Col>
                    </Row>
                    <InfoSpacer></InfoSpacer>
                    <Row>
                        <Col>
                        <img
                            src='/images/recipeInfo/serves.svg'
                            height={'50px'}
                            alt='ServePlate'
                            ></img>
                            <p><strong>Number of Servings:</strong></p>
                            <p>{recipe.numberOfServings}</p>  
                        </Col>
                        <Col>
                        <img
                            src='/images/recipeInfo/difficulty.svg'
                            height={'50px'}
                            alt='DifficultyGauge'
                            ></img>
                            <p><strong>Difficulty:</strong></p>
                            <p>{recipe.difficulty.charAt(0).toUpperCase()+recipe.difficulty.slice(1)}</p>  
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
