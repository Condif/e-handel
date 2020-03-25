export interface Delivery {
    name: string,
    desc: string,
    deliveryTime: string,
    price: number,
}

export const DeliveryTypes: Delivery[] = [
    {
        name: 'Parcel',
        desc: 'Deliver to your postal office',
        deliveryTime: '2-3 work days',
        price: 99,
    },
    {
        name: 'Home delivery',
        desc: 'Deliver to your front door',
        deliveryTime: '2-3 work days',
        price: 199,
    },
    {
        name: 'Express',
        desc: 'Deliver to your front door',
        deliveryTime: '1 work day',
        price: 299,
    },
]