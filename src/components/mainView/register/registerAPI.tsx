export interface RegisterAPI {
    name: string,
    desc: string,
    price: number | string,
}

export interface RegisterInputValues {
    firstName: string,
    altFirstName: string,
    lastName: string,
    altLastName: string,
    mobileNumber: string,
    altMobileNumber: string,
    address: string,
    postal: string,
    city: string,
    cardNumber: string,
    CVC?: string,
    expiry?: string,
}