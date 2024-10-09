import * as React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import Seo from '../../components/seo'
import ValLayout from '../../components/val_layout'
import ValButton from '../../components/val_button'
import {
    buttonDiv,
    buttonRow
} from '../../components/val_layout.module.css'

const ButCon = styled(Container)`
    margin: 10vw;
`;
const ButRow = styled(Row)`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 4rem 0;
`
const ButCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const ValComp = () => {
    return (
        <ValLayout
            background = {`url("/images/backgrounds/ebrithil_base.png")`}
            title = "Main"
            showSearch = {false}
        >
            <ButCon>
                <ButRow>
                    <ButCol>
                        <ValButton navPath={"food"} buttonText={"Food"}/>
                    </ButCol>
                    <ButCol>
                        <ValButton navPath={"farm"} buttonText={"Farming/Fishing"}/>
                    </ButCol>
                    <ButCol>
                        <ValButton navPath={"mead"} buttonText={"Mead"}/>
                    </ButCol>
                </ButRow>
                <ButRow>
                    <ButCol>
                        <ValButton navPath={"tools"} buttonText={"Tools"}/>
                    </ButCol>
                    <ButCol>
                        <ValButton clickFunction={underConstruction} buttonText={"Weapons"}/>
                    </ButCol>
                    <ButCol>
                        <ValButton clickFunction={underConstruction} buttonText={"Armor"}/>
                    </ButCol>
                </ButRow>
                <ButRow>
                    <ButCol>
                            <ValButton clickFunction={underConstruction} buttonText={"Tips"}/>
                    </ButCol>
                </ButRow>
            </ButCon>
        </ValLayout>
        
    )
}

//Alert window that is displayed for buttons that currently do not
//have pages to link to
function underConstruction() {
    window.alert("This page is currently under construction!" +
        "\nPlease check back soon!"
    )
}

export const Head = () => <Seo title="Valheim Companion App" />

export default ValComp