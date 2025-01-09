import crypto, { Hmac } from 'crypto'

export const random = () => crypto.randomBytes(128).toString('base64');
const SECRET = 'mfenriujiujtgiugi3r54nty6nl3i'
export const authentication = (salt: string, password: string): string => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex')
}

