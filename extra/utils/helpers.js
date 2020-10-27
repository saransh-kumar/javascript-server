export function validateEmail(email) {
    let emailRegex = /\w+.\w+@successive.tech$/i
    return emailRegex.test(email)
};
