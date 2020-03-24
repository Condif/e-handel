import React from 'react'
import "./structure.css"
import {Topbar} from '../topbar/topbar'
import { Container, Box, Typography, Button } from '@material-ui/core'

export default function Structure() {
    return (
        
        <Container fixed >
            <Topbar/>
            <Box my={4} >
                <Typography variant="h3" component="h1" gutterBottom>
                    Create React App v4-beta example
                </Typography>
            </Box>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </Container>
    )
}