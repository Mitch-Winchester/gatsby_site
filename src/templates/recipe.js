import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const NodeImage = styled.img`
    width: 100%;
`;
const Row = styled.div`
    display: flex;
`;
const ColPic = styled.div`
    flex: 50%;
    margin-right: 10%;
`;
const ColInfo = styled.div`
    flex: 40%;
`;
const ColLeft = styled.div`
    flex: 20%;
    margin-right: 10%;
`;
const ColRight = styled.div`
    flex: 70%;
`;

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext
    console.log(recipe.ingredients)

    return (
        <Layout pageTitle={recipe.title}>
            <Row>
                <ColPic>
                    <NodeImage 
                        src={recipe.mediaImage.mediaImage.url} 
                        alt={recipe.title}
                    />
                </ColPic>
                <ColInfo>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>Preparation Time: {recipe.preparationTime} minutes</p>
                    <p>Cooking Time: {recipe.cookingTime} minutes</p>
                    <p>Number of Servings: {recipe.numberOfServings}</p>
                </ColInfo>
            </Row>
            <Row>
                <ColLeft>
                <h1>Ingredients:</h1>
                {recipe.ingredients?.map((ingredient, ingIndex) => (
                    <p>{ingredient}</p>
                ))}
                </ColLeft>
                <ColRight>
                    <h2>Recipe Instructions:</h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction?.processed }}></p>
                </ColRight>
            </Row>
        </Layout>
    )
}

export default Recipe