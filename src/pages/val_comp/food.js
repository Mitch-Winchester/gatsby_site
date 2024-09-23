import * as React from 'react'
import { navigate } from 'gatsby'
import Seo from '../../components/seo'
import {
    foodBody,
    backButtonDiv,
    button,
    tableDiv,
    table,
    header
} from '../../components/val_layout.module.css'

const ValFood = () => {
    return (
        <>
            <body className={foodBody}>
                <header className={header}>Food Recipes</header>
                <div className="search_container">
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
                        <tbody id="foodTable"></tbody>
                    </table>
                </div>
                
                <div className={backButtonDiv}>
                    <button className={button} onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const Head = () => <Seo title="Valheim Food" />

export default ValFood