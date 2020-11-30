export function validateEmail(email) {
    const emailRegex = /\w+.\w+@successive.tech$/i;
    return emailRegex.test(email);
}
