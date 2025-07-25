import { hashPassword } from './Modules/utilities/hash';

const password = '1234';
const key = 'my-secret-key';

console.log('Hashed password:', hashPassword(password, key));