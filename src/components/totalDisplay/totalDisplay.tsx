import React from 'react'
import { Typography, makeStyles, createStyles, Theme } from '@material-ui/core'

interface Props {
    itemTotal: { totalValue: number, itemAmount: number }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        componentWrapper: {
            width: '60%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'space-between',
            overflow: 'hidden'
        },
        wrapper: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            '& > p': {
                color: '#404040',
                margin: 0,
                height: '1rem',
                fontSize: '.8rem',
            }
        },
    }));

export default function TotalDisplay(props: Props) {
    const classes = useStyles();

    return (
        <div className={classes.componentWrapper}>
            <div className={classes.wrapper}>
                <p>{`Items: ${props.itemTotal.itemAmount}`}</p>
                <p>{`${(props.itemTotal.totalValue * .8).toFixed(1)}:-`}</p>
            </div>
            <div className={classes.wrapper}>
                <p>VAT:</p>
                <p>25%</p>
            </div>
            <div className={classes.wrapper}>
                <Typography variant="h6">Total:</Typography>
                <Typography variant="h6">{`${props.itemTotal.totalValue}:-`}</Typography>
            </div>

        </div>
    )
}