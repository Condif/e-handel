import React from 'react'
import { PaymentTypes, PaymentOption } from '../paymentAPI'
import { Container, makeStyles, Theme, Typography, TextField, MenuItem, FormControl, Grid, InputLabel } from '@material-ui/core'
import StoreRoundedIcon from '@material-ui/icons/StoreRounded';
import Swishlogo from '../../../../../assets/swish.png'
import PayPallogo from '../../../../../assets/paypal.png'
import { RegisterInputValues } from '../../registerAPI';
import RegisterListItem from '../../registerListItem/registerListItem';
import { DeliveryOption } from '../../deliveryOptions/deliveryAPI';

interface Props {
    selectedPayOpt: PaymentOption | DeliveryOption
    alternate: boolean
    identifier: PaymentOption
    values: RegisterInputValues
    setSelectedPayment: (value: DeliveryOption | PaymentOption) => void
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
                        error={(!props.alternate) ? props.values.firstName.error : props.values.altFirstName.error}
                        required
                        value={(!props.alternate) ? props.values.firstName.value : props.values.altFirstName.value}
                        onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "firstName" : "altFirstName"}`)}
                        label="First name"
                        helperText={(!props.alternate) ? (props.values.firstName.error) ? "Enter letters" : null : (props.values.altFirstName.error) ? "Enter letters" : null}
                        inputProps={{
                            maxLength: 20
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        error={(!props.alternate) ? props.values.lastName.error : props.values.altLastName.error}
                        required
                        value={(!props.alternate) ? props.values.lastName.value : props.values.altLastName.value}
                        onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "lastName" : "altLastName"}`)}
                        label="Last name"
                        helperText={(!props.alternate) ? (props.values.lastName.error) ? "Enter letters" : null : (props.values.altLastName.error) ? "Enter letters" : null}
                        inputProps={{
                            maxLength: 20
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        error={props.values.cardNumber.error}
                        required
                        value={props.values.cardNumber.value}
                        onChange={(event) => props.handleInputChange(event, 'cardNumber')}
                        label="Card number"
                        helperText={(props.values.cardNumber.error) ? "Enter numbers (16)" : null}
                        inputProps={{
                            maxLength: 16
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <FormControl fullWidth>
                    <TextField
                        size="small"
                        error={props.values.CVC.error}
                        required
                        label="CVC/CVV"
                        value={props.values.CVC.value}
                        onChange={(event) => props.handleInputChange(event, 'CVC')}
                        helperText="The last three digits on signature strip"
                        inputProps={{
                            maxLength: 3
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4} style={{ marginTop: '1rem', padding: '1rem' }}>
                <InputLabel style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ marginRight: '.5rem' }}>Expiry:</p>
                    <TextField
                        size="small"
                        error={props.values.cardMonth.error}
                        required
                        value={props.values.cardMonth.value}
                        onChange={(event) => props.handleInputChange(event, 'cardMonth')}
                        helperText="month (2)"
                        inputProps={{
                            maxLength: 2
                        }}
                    />
                    <p style={{ margin: '0 .3rem .5rem .3rem', fontSize: '.8rem' }}>/</p>
                    <TextField
                        size="small"
                        error={props.values.cardYear.error}
                        required
                        value={props.values.cardYear.value}
                        onChange={(event) => props.handleInputChange(event, 'cardYear')}
                        helperText="year (2)"
                        inputProps={{
                            maxLength: 2
                        }}
                    />
                </InputLabel>
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
                    error={(!props.alternate) ? props.values.mobileNumber.error : props.values.altMobileNumber.error}
                    required
                    value={(!props.alternate) ? props.values.mobileNumber.value : props.values.altMobileNumber.value}
                    onChange={(event) => props.handleInputChange(event, `${(!props.alternate) ? "mobileNumber" : "altMobileNumber"}`)}
                    label="Your mobile number"
                    helperText={(!props.alternate) ? (props.values.mobileNumber.error) ? "Enter numbers (10)" : null : (props.values.altMobileNumber.error) ? "Enter numbers (10)" : null}
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
                        : generateKlarnaInput(props)
            }
        </Container>
    )
}

const generateKlarnaInput = (props: Props) => {
    return (
        (props.identifier.options) ?
            props.identifier.options.map(option => (
                <RegisterListItem
                    key={option.name}
                    selectedIndex={props.selectedPayOpt}
                    identifier={option}
                    handleListItemClick={props.setSelectedPayment}
                />
            ))
            : null
    )
}

export default function ChosenPayment(props: Props) {
    const classes = useStyles();
    const [type, setType] = React.useState('VISA');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

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