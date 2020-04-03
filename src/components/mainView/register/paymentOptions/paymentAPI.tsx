import { RegisterAPI } from "../registerAPI"

export interface PaymentOption extends RegisterAPI {
    type: 'pay',
    options: any[] | false
}

export const basePayment: PaymentOption = {
    type: 'pay',
    name:'none',
    desc: 'none',
    price: 'none',
    options: false
}

export const PaymentTypes: PaymentOption[] = [
    {
        type: 'pay',
        name: 'Card',
        desc: 'Pay immediately on delivery',
        price: 'free',
        options: false
    },
    {
        type: 'pay',
        name: 'Swish',
        desc: 'Pay by Swish immediately on purchase',
        price: 'free',
        options: false
    },
    {
        type: 'pay',
        name: 'Paypal',
        desc: 'Pay by Paypal immediately on purchase',
        price: 'free',
        options: false
    },
    {
        type: 'pay',
        name: 'Klarna',
        desc: 'Pay by invoice after purchase',
        price: 'fee',
        options: [{
            type: 'payopt',
            name: '14 day invoice',
            desc: 'Pay within 14 days',
            price: 'free',
            options: false
        },
        {
            type: 'payopt',
            name: '3 months invoice',
            desc: 'Pay within 3 months',
            price: 99,
            options: false
        }]
    },
    
]
