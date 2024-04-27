import md5 from 'md5';

export function generate6DigitMD5Hash() {
    let randomDigits = Math.floor(Math.random() * 26);
    let res = md5(Math.random().toString(36));
    return res.substring(randomDigits, randomDigits + 6);
}

export function generateRandomMD5Hash() {
    return md5(Math.random().toString(36).substring(2));
}
