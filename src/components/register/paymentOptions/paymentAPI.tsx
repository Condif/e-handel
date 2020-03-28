import { RegisterAPI } from "../registerAPI"

export interface PaymentOption extends RegisterAPI {
    type: 'pay',
    // name: string,
    // desc: string,
    // price: string | number
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
        name: 'Klarna Invoice',
        desc: 'Pay by invoice after purchase',
        price: 'fee',
        options: [{
            value: 'KLA14',
            label: '14 day invoice'
        },
        {
            value: 'KLA3M',
            label: '3 months invoice'
        }]
    },
    
]