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

const ValMead = () => {
    return (
        <>
            <body className={meadBody}>
                <header className={header}>Mead Recipes</header>
                <div className={searchContainer}>
                    <input type="text" id="searchBar" placeholder="Search..." />
                </div>
                
                <div className={tableDiv}>
                    <table className={table}>
                        <thead>
                            <tr id="tableHeader">
                                <th></th>
                                <th>Item</th>
                                <th>Effect</th>
                                <th>Duration (s)</th>
                                <th>Recipe</th>
                            </tr>
                        </thead>
                        <tbody id="meadTable"></tbody>
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
    query ($id: String) {
        meadJson(id: {eq: $id}) {
            content {
                Duration
                Effect
                Item
                Recipe
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Mead" />

export default ValMead