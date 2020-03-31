import { RegisterAPI } from "../registerAPI"

export interface DeliveryOption extends RegisterAPI {
    type: 'del',
    // name: string,
    // desc: string,
    deliveryTime: string,
    // price: number,
}

export const baseDelivery: DeliveryOption = {
    type: 'del',
    name: 'Parcel',
    desc: 'Deliver to your postal office',
    deliveryTime: '2-3 work days',
    price: 99,
}

export const DeliveryTypes: DeliveryOption[] = [
    {
        type: 'del',
        name: 'Parcel',
        desc: 'Deliver to your postal office',
        deliveryTime: '2-3 work days',
        price: 99,
    },
    {
        type: 'del',
        name: 'Home delivery',
        desc: 'Deliver to your front door',
        deliveryTime: '2-3 work days',
        price: 199,
    },
    {
        type: 'del',
        name: 'Express',
        desc: 'Deliver to your front door',
        deliveryTime: '1 work day',
        price: 299,
    },
]