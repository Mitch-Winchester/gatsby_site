import * as React from 'react'
import { navigate, Link, graphql } from 'gatsby'
import Seo from '../../components/seo'
import {
    mainHeader,
    mainBody,
    buttonDiv,
    topButtonDiv,
    botButtonDiv,
    backButtonDiv,
    button
} from '../../components/val_layout.module.css'

const ValComp = () => {
    return (
        <>
            <body className={mainBody}>
                <title>Valheim Companion</title>
                <div className={mainHeader}></div>
                <div className={buttonDiv}>
                    <div className={topButtonDiv}>
                        <button className={button} id="bTool">Tools</button>
                        <button className={button} id="bWeapon">Weapons</button>
                        <button className={button} id="bArmor">Armor</button>
                    </div>
                    <div className={botButtonDiv}>
                        <button className={button} onClick={()=>{navigate("/val_comp/food")}}>Food</button>
                        <button className={button} onClick={()=>{navigate("/val_comp/farm")}}>Farming/Fishing</button>
                        <button className={button} onClick={()=>{navigate("/val_comp/mead")}}>Mead</button>
                    </div>
                </div>
                <div class={backButtonDiv}>
                    <button class={button} onClick={()=>{navigate("/")}}>Back to Main Site</button>
                </div>
            </body>
        </>
        
    )
}

export const Head = () => <Seo title="Valheim Companion" />

export default ValComp