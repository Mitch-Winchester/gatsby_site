import * as React from 'react'
import { navigate, graphql } from 'gatsby'
import Seo from '../../../components/seo'
import {
    farmBody,
    backButtonDiv,
    button,
    tableDiv,
    table,
    header
} from '../../../components/val_layout.module.css'

const ValFarm = ({ data }) => {
    return (
        <>
            <body className={farmBody}>
                <header className={header}>Farming & Fishing Recipes</header>
                <div className={tableDiv} style={{marginBottom: '5%'}}>
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
                        <tbody>
                            {data.farmJson.crop.content.map((crop, index) => {
                                let imagePath = `/images/crops/${crop.Crop.replaceAll(' ','_')}.png`;

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={imagePath}
                                                alt={crop.Crop}
                                            />
                                        </td>
                                        <td>{crop.Crop}</td>
                                        <td>{crop.Biome}</td>
                                        <td>{crop.Growth}</td>
                                        <td>{crop.Space}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <div className={tableDiv} style={{marginBottom: '5%'}}>
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
                        <tbody>
                            {data.farmJson.feed.content.map((feed, index) => {
                                let imagePath = `/images/farm/${feed.Animal.replaceAll(' ','_')}.png`;

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={imagePath}
                                                alt={feed.Animal}
                                            />
                                        </td>
                                        <td>{feed.Animal}</td>
                                        <td>{feed.Feed}</td>
                                        <td>{feed.Space}</td>
                                        <td>{feed.Growth}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
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
                        <tbody>
                            {data.farmJson.bait.content.map((bait, index) => {
                                let imagePath = `/images/bait/${bait.Item.replaceAll(' ','_')}_fishing_bait.png`;

                                if (bait.Item === "Fishing bait") {
                                    imagePath = `/images/bait/${bait.Item.replaceAll(' ','_')}.png`;
                                }

                                return (
                                    <tr key={index}>
                                        <td>
                                            <img
                                                src={imagePath}
                                                alt={bait.Item}
                                            />
                                        </td>
                                        <td>{bait.Item}</td>
                                        <td>{bait.Use}</td>
                                        <td>{bait.Recipe}</td>
                                    </tr>
                                )
                            })}
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
    query ($id: String) {
        farmJson(id: {eq: $id}) {
            feed {
                content {
                    Animal
                    Feed
                    Growth
                    Space
                }
            }
            crop {
                content {
                    Biome
                    Crop
                    Growth
                    Produce
                    Space
                }
            }
            bait {
                content {
                    Item
                    Recipe
                    Use
                }
            }
        }
    }
`

export const Head = () => <Seo title="Valheim Farming/Fishing" />

export default ValFarm