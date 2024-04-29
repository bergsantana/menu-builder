export  interface User {
    firstName: string
    lastName: string
    birthDate: string
    email: string
    password: string
    phoneNumber: string
    paymentKey: string,
}

export default interface RegisteredUser extends User{
    _id: string
}