import React from 'react'
import { PaymentTypes, PaymentOption } from '../paymentAPI'
import { Container, makeStyles, Theme, Typography, TextField, MenuItem, FormControl } from '@material-ui/core'
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';

interface Props {
    identifier: PaymentOption
}

const useStyles = makeStyles((theme: Theme) => ({
    blankTitle: {
        textAlign: 'center',
        margin: theme.spacing(2, 1)
    },
    noSelection: {
        padding: theme.spacing(0, 1, 2),
        height: '100%',
        border: '2px dashed #EBEBEB',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        padding: theme.spacing(0, 1, 2),
        height: '100%',
        border: '2px solid #EBEBEB',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    textField: {
        margin: theme.spacing(1, 1)
    }
}))

const blankPage = (classes: Record<"blankTitle" | "noSelection", string>) => {
    return (
        <Container className={classes.noSelection}>
            <Typography variant="h5" className={classes.blankTitle}>
                Choose a payment method
            </Typography>
            <StoreRoundedIcon fontSize="large" />
        </Container>
    )
}

const generatePurchaseOptions = (classes: any, props: Props, type: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void) => {
    console.log(props.identifier);

    return (
        <Container className={classes.wrapper}>
            <Typography variant="h5" className={classes.blankTitle}>
                {props.identifier.name}
            </Typography>
            {generateOptionalDropDown(classes, props, type, handleChange)}
            
        </Container>
    )
}

const generateOptionalDropDown = (classes: any, props: Props, type: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void) => {
    return (
        (props.identifier.options) ? 
        <FormControl fullWidth>
            <TextField
                className={classes.textField}
                select
                label={`${props.identifier.name} type:`}
                value={type}
                onChange={handleChange}
                helperText={`Please select type`}
            >
                {props.identifier.options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </FormControl>
        : null
    )
}

export default function ChosenPayment(props: Props) {
    const classes = useStyles();
    const [type, setType] = React.useState('VISA');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('change');

        setType(event.target.value);
    };

    return (
        <>
            {(props.identifier.name === 'none')
                ? blankPage(classes)
                : generatePurchaseOptions(classes, props, type, handleChange)
            }
        </>
    )
}