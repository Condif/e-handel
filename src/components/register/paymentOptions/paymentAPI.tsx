export interface PaymentOption {
    identifier: string,
    name: string,
    desc: string,
    fee: string | number
}

export const PaymentTypes: PaymentOption[] = [
    {
        identifier: 'Card',
        name: 'Card',
        desc: 'Pay immediately on delivery',
        fee: 'free'
    },
    {
        identifier: 'SWISH',
        name: 'Swish',
        desc: 'Pay by Swish immediately on purchase',
        fee: 'free'
    },
    {
        identifier: 'PAYPL',
        name: 'Paypal',
        desc: 'Pay by Paypal immediately on purchase',
        fee: 'free'
    },
    {
        identifier: 'KLARN',
        name: 'Klarna Invoice',
        desc: 'Pay by invoice after purchase',
        fee: 'fee'
    },
    
]