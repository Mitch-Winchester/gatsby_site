import * as React from 'react'
import { navigate } from 'gatsby'
import Seo from '../../components/seo'
import {
    foodBody,
    backButtonDiv,
    button,
    tableDiv,
    table
} from '../../components/val_layout.module.css'

const ValFood = () => {
    return (
        <>
            <body class={foodBody}>
                <div class="search_container">
                </div>
                
                <div class={tableDiv}>
                    <table class={table}>
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
                
                <div class={backButtonDiv}>
                    <button class={button} onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const Head = () => <Seo title="Valheim Food" />

export default ValFood