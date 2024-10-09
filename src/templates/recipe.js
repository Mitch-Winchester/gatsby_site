import * as React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
            <div className="row mb-4">
                <div className="col-md-6 mb-3">
                    <img 
                        src={recipe.mediaImage.mediaImage.url} 
                        alt={recipe.title}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-4">
                    <p className="mb-2"><strong>Difficulty:</strong> {recipe.difficulty}</p>
                    <p className="mb-2"><strong>Preparation Time:</strong> {recipe.preparationTime} minutes</p>
                    <p className="mb-2"><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
                    <p className="mb-2"><strong>Number of Servings:</strong> {recipe.numberOfServings}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <h2>Ingredients:</h2>
                    {recipe.ingredients?.map((ingredient, ingIndex) => (
                        <p key={ingIndex}>{ingredient}</p>
                    ))}
                </div>
                <div className="col-md-8">
                    <h2>Recipe Instructions:</h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction?.processed }}></p>
                </div>
            </div>
        </Layout>
    )
}

export default Recipe
