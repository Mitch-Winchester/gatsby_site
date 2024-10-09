import * as React from 'react'
import Layout from '../components/layout'
import { Row, Col } from 'react-bootstrap'

const Recipe = ({ pageContext }) => {
    const { recipe } = pageContext

    return (
        <Layout pageTitle={recipe.title}>
            <Row>
                <Col xs={12} md={6}>
                    <img 
                        src={recipe.mediaImage.mediaImage.url} 
                        alt={recipe.title}
                        className="img-fluid"
                    />
                </Col>
                <Col xs={12} md={6}>
                    <Row>
                        <Col>
                            <p><strong>Difficulty:</strong></p>
                            <p>{recipe.difficulty}</p>
                        </Col>
                        <Col>
                            <p><strong>Preparation Time:</strong></p>
                            <p>{recipe.preparationTime} minutes</p>    
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><strong>Cooking Time:</strong></p>
                            <p>{recipe.cookingTime} minutes</p>    
                        </Col>
                        <Col>
                            <p><strong>Number of Servings:</strong></p>
                            <p>{recipe.numberOfServings}</p>    
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4} className="mb-3">
                    <h2>Ingredients:</h2>
                    {recipe.ingredients?.map((ingredient, ingIndex) => (
                        <p key={ingIndex}>{ingredient}</p>
                    ))}
                </Col>
                <Col xs={12} md={8}>
                    <h2>Recipe Instructions:</h2>
                    <p dangerouslySetInnerHTML={{ __html: recipe.recipeInstruction?.processed }}></p>
                </Col>
            </Row>
        </Layout>
    )
}

export default Recipe
