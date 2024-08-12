export type SignupFormErrors = {
    errors: {
        name?: string[],
        email?: string[],
        password?: string[],
    },
    message: string
}

export type LoginFormErrors = {
    errors: {
        email?: string[],
        password?: string[],
    },
    status?: number,
    message: string
}
export type SignUpUser = {
    name: string,
    email: string,
    password: string
}


export type PasswordCompliance = {
    id: number,
    text: string,
    complied: boolean
}[];