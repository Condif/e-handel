import React from 'react'
import { PaymentTypes, PaymentOption } from '../paymentAPI'
import { Container, makeStyles, Theme, Typography, TextField, MenuItem, FormControl, Grid } from '@material-ui/core'
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import Swishlogo from '../../../../../assets/swish.png'
import PayPallogo from '../../../../../assets/paypal.png'
import { RegisterInputValues } from '../../registerAPI';

interface Props {
    alternate: boolean
    identifier: PaymentOption
    values: RegisterInputValues
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: string) => void
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
        padding: theme.spacing(0, 2, 2),
        height: '100%',
        border: '2px solid #EBEBEB',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    cardWrapper: {
        padding: theme.spacing(0, 1, 3)
    },
    logoWrapper: {
        justifySelf: 'center',
        maxWidth: '12rem',
        width: '80%',
        margin: theme.spacing(2, 1)
    },
    formWrapper: {
        width: '100%'
    },
    centeredContent: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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

const generateCardInputs = (classes: any, props: Props) => {
    return (
        <Grid container spacing={4} className={classes.cardWrapper}>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        required
                        value={(!props.alternate) ? props.values.firstName : props.values.altFirstName}
                        onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "firstName" : "altFirstName"}`)}
                        label="First name"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        required
                        value={(!props.alternate) ? props.values.lastName : props.values.altLastName}
                        onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "lastName" : "altLastName"}`)}
                        label="Last name"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        type="number"
                        required
                        value={props.values.cardNumber}
                        onChange={(event) => props.handleInputChange(event, 'cardNumber')}
                        label="Card number"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        type="number"
                        required
                        label="CVC/CVV"
                        value={props.values.CVC}
                        onChange={(event) => props.handleInputChange(event, 'CVC')}
                        helperText="The last three digits on signature strip"
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        type="number"
                        required
                        value={props.values.expiry}
                        onChange={(event) => props.handleInputChange(event, 'expiry')}
                        label="Expiry date"
                    />
                </FormControl>
            </Grid>
        </Grid>
    )
}

const generateSwishInput = (classes: any, props: Props) => {
    return (
        <div className={classes.formWrapper}>
            <FormControl fullWidth className={classes.centeredContent}>
                <img src={Swishlogo} className={classes.logoWrapper} alt="swish_logo" />
                <TextField
                    size="small"
                    required
                    value={(!props.alternate) ? props.values.mobileNumber : props.values.altMobileNumber}
                    onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "mobileNumber" : "altMobileNumber"}`)}
                    label="Your mobile number"
                    type="number"
                />
            </FormControl>
        </div>
    )
}
const generatePaypalInput = (classes: any) => {
    return (
        <div className={classes.formWrapper}>
            <FormControl fullWidth className={classes.centeredContent}>
                <img src={PayPallogo} className={classes.logoWrapper} alt="paypal_logo" />
                {/* <TextField
                    size="small"
                    required
                    label="Your mobile number"
                    type="number"
                /> */}
            </FormControl>
        </div>
    )
}

const generatePurchaseOptions = (classes: any, props: Props, type: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void) => {
    console.log(props.identifier);

    return (
        <Container className={classes.wrapper}>
            <Typography variant="h5" className={classes.blankTitle}>
                {props.identifier.name}
            </Typography>
            {(props.identifier.name === 'Card')
                ? generateCardInputs(classes, props)
                : props.identifier.name === 'Swish'
                    ? generateSwishInput(classes, props)
                    : props.identifier.name === 'Paypal'
                        ? generatePaypalInput(classes)
                        : null
            }
        </Container>
    )
}

const generateOptionalDropDown = (props: Props, type: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void) => {
    return (
        (props.identifier.options) ?
            <FormControl fullWidth>
                <TextField
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