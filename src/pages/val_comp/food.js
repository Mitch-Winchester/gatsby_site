import * as React from 'react'
import { navigate, graphql } from 'gatsby'
import Seo from '../../components/seo'
import {
    foodBody,
    backButtonDiv,
    button,
    tableDiv,
    table,
    header,
    searchContainer
} from '../../components/val_layout.module.css'

const ValFood = ({ data }) => {
    return (
        <>
            <body className={foodBody}>
                <header className={header}>Food Recipes</header>
                <div className={searchContainer}>
                    <input type="text" id="searchBar" placeholder="Search..." />
                </div>
                
                <div className={tableDiv}>
                    <table className={table}>
                        <thead>
                            <tr id="tableHeader">
                                <th></th>
                                <th>Item</th>
                                <th>Health</th>
                                <th>Stamina</th>
                                <th>Eitr</th>
                                <th>Healing</th>
                                <th>Duration (min)</th>
                                <th>Biome</th>
                                <th>Recipe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allDataJson.nodes.map(node => 
                                node.content.map((food, index) => {
                                    let imagePath = `/images/food/${food.Item.replaceAll(' ','_')}.png`;

                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img
                                                    src={imagePath}
                                                    alt={food.Item}
                                                />
                                            </td>
                                            <td>{food.Item}</td>
                                            <td>{food.Health}</td>
                                            <td>{food.Stamina}</td>
                                            <td>{food.Eitr}</td>
                                            <td>{food.Healing}</td>
                                            <td>{food.Duration}</td>
                                            <td>{food.Biome}</td>
                                            <td>{food.Recipe}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
                
                <div className={backButtonDiv}>
                    <button className={button} onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const query = graphql`
    query {
        allDataJson(filter: {title: {eq: "Food"}}) {
            nodes {
                content {
                    Item
                    Health
                    Stamina
                    Eitr
                    Healing
                    Duration
                    Biome
                    Recipe
                }
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Food" />

export default ValFood