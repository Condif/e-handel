import React from 'react'
import "./structure.css"
import '@shopify/polaris/styles.css';
import { Layout } from '@shopify/polaris';
import {TopBarExample} from '../topbar/topbar'

export default function Structure() {
    return (
        <Layout>
            <Layout.Section>
                <TopBarExample/>
            </Layout.Section>
        </Layout>
    )
}