export interface Delivery {
    name: string,
    desc: string,
    deliveryTime: string,
    price: number,
}

export const DeliveryTypes: Delivery[] = [
    {
        name: 'Postpaket',
        desc: 'Leverans till ett postombud',
        deliveryTime: '2-3 arbetsdagar',
        price: 99,
    },
    {
        name: 'Hempaket',
        desc: 'Leverans till dörren',
        deliveryTime: '2-3 arbetsdagar',
        price: 199,
    },
    {
        name: 'Express',
        desc: 'Leverans till dörren',
        deliveryTime: '1 arbetsdag',
        price: 299,
    },
]