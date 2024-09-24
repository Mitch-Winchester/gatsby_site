import * as React from 'react'
import { navigate, graphql } from 'gatsby'
import Seo from '../../../components/seo'
import {
    meadBody,
    backButtonDiv,
    button,
    tableDiv,
    table,
    header,
    searchContainer
} from '../../../components/val_layout.module.css'

const ValMead = ({ data }) => {
    return (
        <>
            <main>
                
            </main>
            <body className={meadBody}>
                <header className={header}>Mead Recipes</header>
                <div className={searchContainer}>
                    <input type="text" aria-label="searchBar" placeholder="Search..." />
                </div>
                
                <div className={tableDiv}>
                    <table className={table}>
                    <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Effect</th>
                                <th>Duration (s)</th>
                                <th>Recipe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.meadJson.content.map((mead, index) => {
                                let imagePath = `/images/mead/${mead.Item.replaceAll(' ', '_')}_mead.png`;
                                
                                if (mead.Item === "Tasty mead") {
                                    imagePath = `/images/mead/Tasty_mead.png`;
                                } else if (mead.Item === "Fire resistance") {
                                    imagePath = `/images/mead/Fire_resistance_barley_wine.png`;
                                }

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={imagePath}
                                                alt="mead"
                                            />
                                        </td>
                                        <td>{mead.Item}</td>
                                        <td>{mead.Effect}</td>
                                        <td>{mead.Duration}</td>
                                        <td>{mead.Recipe}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                        
                <div className={backButtonDiv}>
                    <button className={button} aria-label="back" onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const query = graphql`
    query ($id: String) {
        meadJson(id: {eq: $id}) {
            content {
                Item
                Effect
                Duration
                Recipe
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Mead" />

export default ValMead