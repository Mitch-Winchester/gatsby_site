const path = require("path")

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    // Query for recipe nodes to use in creating pages.
    const result = await graphql(
        `
            query {
                Drupal {
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
                                value
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

    // Create pages for each recipe node
    const recipesTemplate = path.resolve(`src/templates/recipe.js`)
    result.data.Drupal.nodeRecipes.nodes.forEach(node => {
        createPage({
            path: `/recipe/${node.title}`,
            component: recipesTemplate,
            context: {
                recipe: node,
            },
        })
    })
}