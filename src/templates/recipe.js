import * as React from 'react'
import Layout from '../components/layout'

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
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