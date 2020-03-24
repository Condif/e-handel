import React from 'react';
import { Box, Typography } from '@material-ui/core';

export function Topbar() {
    return (
    <Box my={4} >
        <Typography variant="h2" component="h1" gutterBottom>
            Create React App v4-beta example
        </Typography>
    </Box>
    )}