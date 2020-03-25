export interface Delivery {
    name: string,
    desc: string,
    price: number,
    // active: boolean
}

export const DeliveryTypes: Delivery[] = [
    {
        name: 'Postpaket',
        desc: 'Leverans till ett postombud',
        price: 99,
        // active: false
    },
    {
        name: 'Hempaket',
        desc: 'Leverans till dörren',
        price: 199,
        // active: false
    },
    {
        name: 'Expressleverans',
        desc: 'Leverans till dörren, inom 1 arbetsdag',
        price: 299,
        // active: false
    }
]