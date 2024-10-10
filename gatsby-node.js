const path = require("path")

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Query for recipe nodes to use in creating pages.
    const result = await graphql(
        `
            query {
                allDrupalNodeArtRec {
                    nodeRecipes(first: 10) {
                        nodes {
                            title
                            cookingTime
                            difficulty
                            ingredients
                            mediaImage {
                                mediaImage {
                                    url
                                }
                            }
                            numberOfServings
                            preparationTime
                            recipeInstruction {
                                processed
                            }
                            summary {
                                processed
                            }
                        }
                    }
                    nodeArticles(first: 10) {
                        nodes {
                            title
                            author {
                                displayName
                            }
                            created
                            mediaImage {
                                mediaImage {
                                    url
                                }
                            }
                            body {
                                processed
                            }
                        }
                    }
                }
            }
        `
    )

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        return
    }

    // Create pages for each node
    const recipesTemplate = path.resolve(`src/templates/recipe.js`)
    const articlesTemplate = path.resolve(`src/templates/article.js`)
    
    if (result.data.allDrupalNodeArtRec.nodeRecipes) {
        result.data.allDrupalNodeArtRec.nodeRecipes.nodes.forEach(node => {
            createPage({
                path: `/recipe/${node.title}`,
                component: recipesTemplate,
                context: {
                    recipe: node,
                },
            })
        })
    }
    if (result.data.allDrupalNodeArtRec.nodeArticles) {
        result.data.allDrupalNodeArtRec.nodeArticles.nodes.forEach(node => {
            createPage({
                path: `/article/${node.title}`,
                component: articlesTemplate,
                context: {
                    article: node,
                },
            })
        })
    }
}