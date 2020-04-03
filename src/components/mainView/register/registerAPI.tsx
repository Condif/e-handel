export interface RegisterAPI {
    name: string,
    desc: string,
    price: number | string,
}

export interface RegisterInputValues {
    firstName: {
        value: string,
        error: boolean
    },
    altFirstName: {
        value: string,
        error: boolean
    },
    lastName: {
        value: string,
        error: boolean
    },
    altLastName: {
        value: string,
        error: boolean
    },
    mobileNumber: {
        value: string,
        error: boolean
    },
    altMobileNumber: {
        value: string,
        error: boolean
    },
    address: {
        value: string,
        error: boolean
    },
    postal: {
        value: string,
        error: boolean
    },
    city: {
        value: string,
        error: boolean
    },
    cardNumber: {
        value: string,
        error: boolean
    },
    CVC: {
        value: string,
        error: boolean
    },
    cardMonth: {
        value: string,
        error: boolean
    },
    cardYear: {
        value: string,
        error: boolean
    },
}