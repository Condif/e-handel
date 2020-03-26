import React from 'react'
import { Typography, makeStyles, Theme, Grid } from '@material-ui/core'
import { PaymentTypes, PaymentOption } from './paymentAPI';
import RegisterListItem from '../registerListItem/registerListItem';
import ChosenPayment from './chosenPayment/chosenPayment';

const useStyles = makeStyles((theme: Theme) => ({
    title: {
        margin: theme.spacing(0, 0, 2),
    },
    nested: {
        padding: theme.spacing(0, 4, 2, 4),
    },
    wrapper: {
        height: '100%',
    }
}));

export default function CardInformation() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState('none');
    const handleListItemClick = (
        // event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.ChangeEvent<HTMLInputElement>,
        identifier: string | number,
      ) => {
          (typeof identifier === 'string') ? setSelectedIndex(identifier) : console.log(identifier);
          ;
    };

    return (
        <>
            <Typography variant="h5" className={classes.title}>
                Payment methods
            </Typography>
            <Grid container spacing={2}>
                <Grid item md={4} sm={6} xs={12}>
                    {PaymentTypes.map((element: PaymentOption) =>
                        <RegisterListItem 
                            key={element.name}
                            selectedIndex={selectedIndex}
                            identifier={element.identifier}
                            handleListItemClick={handleListItemClick}
                            name={element.name}
                            desc={element.desc}
                            price={element.fee}
                        />
                    )}
                </Grid>
                <Grid item md={8} sm={6} xs={12}>
                        <ChosenPayment method={selectedIndex} />
                </Grid>
            </Grid>
        </>
    )
}