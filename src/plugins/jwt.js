// @ts-check
import jwt from 'jsonwebtoken';
import { JWT_CONFIG } from 'constants/secret';

class Strategy {
  constructor() {
    this.jwt = jwt;
    this.secret = JWT_CONFIG.SECRET_KEY;
    // this.expiresIn = JWT_CONFIG.EXPIRE_DATE;
  }

  // { payload, expiresIn = this.expiresIn }
  sign(payload) {
    return this.jwt.sign(payload, this.secret);
  }

  /**
   * @param {string} token
   */
  decode(token) {
    return this.jwt.decode(token);
  }
}

export const JwtStrategy = new Strategy();
