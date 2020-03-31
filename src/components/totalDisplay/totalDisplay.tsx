import React from 'react'
import { Typography } from '@material-ui/core'

interface Props {
    itemTotal: {totalValue: number, itemAmount: number}
}

export default function TotalDisplay(props: Props) {
    return (
            <Typography variant="h6">{`Items: ${props.itemTotal.itemAmount} Total: ${props.itemTotal.totalValue}`}</Typography>
    )
}