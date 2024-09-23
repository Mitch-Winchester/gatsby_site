import * as React from 'react'
import { navigate } from 'gatsby'
import Seo from '../../components/seo'
import {
    meadBody,
    backButtonDiv,
    button,
    tableDiv,
    table
} from '../../components/val_layout.module.css'

const ValMead = () => {
    return (
        <>
            <body class={meadBody}>
                <div class="search_container">
                </div>
                
                <div class={tableDiv}>
                    <table class={table}>
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
                        
                <div class={backButtonDiv}>
                    <button class={button} onClick={()=>{navigate("/val_comp")}}>Back to Home Page</button>
                </div>
            </body>
        </>
    )
}

export const Head = () => <Seo title="Valheim Mead" />

export default ValMead