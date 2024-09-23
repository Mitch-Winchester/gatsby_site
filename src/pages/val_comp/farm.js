import * as React from 'react'
import { navigate } from 'gatsby'
import Seo from '../../components/seo'
import {
    farmBody,
    backButtonDiv,
    button,
    tableDiv,
    table,
    header
} from '../../components/val_layout.module.css'

const ValFarm = () => {
    return (
        <>
            <body className={farmBody}>
                <header className={header}>Farming & Fishing Recipes</header>
                <div className={tableDiv}>
                    <table className={table}>
                        <thead>
                            <tr id="tableHeader">
                                <th></th>
                                <th>Crop</th>
                                <th>Biome(s) needed to grow</th>
                                <th>Grow Time (s)</th>
                                <th>Required Space (m)</th>
                            </tr>
                        </thead>
                        <tbody id="cropTable"></tbody>
                    </table>
                </div>

                <div className={tableDiv}>
                    <table className={table}>
                        <thead>
                            <tr id="tableHeader">
                                <th></th>
                                <th>Animal</th>
                                <th>Feed</th>
                                <th>Space Needed</th>
                                <th>Grow Time (s)</th>
                            </tr>
                        </thead>
                        <tbody id="feedTable"></tbody>
                    </table>
                </div>

                <div className={tableDiv}>
                    <table className={table}>
                        <thead>
                            <tr id="tableHeader">
                                <th></th>
                                <th>Bait Type</th>
                                <th>Use</th>
                                <th>Recipe</th>
                            </tr>
                        </thead>
                        <tbody id="baitTable"></tbody>
                    </table>
                </div>
                
                <div className={backButtonDiv}>
                    <button className={button} onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const Head = () => <Seo title="Valheim Farming/Fishing" />

export default ValFarm