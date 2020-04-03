import { RegisterAPI } from "../registerAPI"
import React from 'react'
import RegisterListItem from "../registerListItem/registerListItem";

export interface DeliveryOption extends RegisterAPI {
    type: 'del',
    deliveryTime: number,
}

export const baseDelivery: DeliveryOption = {
    type: 'del',
    name: '',
    desc: '',
    deliveryTime: 0,
    price: 'none',
}

export const DeliveryTypes: DeliveryOption[] = [
    {
        type: 'del',
        name: 'Parcel',
        desc: 'Deliver to your postal office',
        deliveryTime: 2,
        price: 99,
    },
    {
        type: 'del',
        name: 'Home delivery',
        desc: 'Deliver to your front door',
        deliveryTime: 2,
        price: 199,
    },
    {
        type: 'del',
        name: 'Express',
        desc: 'Deliver to your front door',
        deliveryTime: 1,
        price: 299,
    },
]


export default function GetDeliveryDate(delivery: number) {
    
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let date = new Date().getDate();


    let newDate = date + delivery
    let newMonth = month

    let monthString = month.toString();
    let dateString = newDate.toString();

    if (newMonth > 12) {
        newMonth -= 12
    }


    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12 && newDate > 31) {
        newDate -= 31
        newMonth += 1
    } 

    if (newDate > 30 && ( month === 4 || 6 || 9 || 11) ) {
        console.log(newDate)
        newDate -= 30
        newMonth += 1
    }

    if (month === 2 && newDate > 29) {
        newDate -= 29
        newMonth += 1
    }

    if (month < 9 ) {
        monthString = '0' + newMonth.toString()
    }

    if (newDate < 10) {
        dateString = '0' + newDate.toString()   
    }
    const deliveryArrival = ('Delivery: ' + year + '-' + monthString + '-' + dateString)

    return deliveryArrival;


}

