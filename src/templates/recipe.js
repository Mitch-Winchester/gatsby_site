import * as React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const NodeImage = styled.img`
    width: 100%;
`;

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
            <NodeImage 
                src={recipe.mediaImage.mediaImage.url} 
                alt={recipe.title}
            />
            <div>
                <p>Difficulty: {recipe.difficulty}</p>
                <p>Preparation Time: {recipe.preparationTime} minutes</p>
                <p>Cooking Time: {recipe.cookingTime} minutes</p>
                <p>Number of Servings: {recipe.numberOfServings}</p>
                <p>Ingredients: {recipe.ingredients}</p>
            </div>
        </Layout>
    )
}

export default Recipe