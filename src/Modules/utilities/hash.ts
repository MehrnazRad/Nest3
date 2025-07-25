import { pbkdf2Sync } from 'crypto';

export function hashPassword(content: string, key: string) {
  return pbkdf2Sync(content, key, 200, 64, 'sha256').toString('hex');
}