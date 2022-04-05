import { JwtStrategy } from 'plugins/jwt';

export const TokenService = {
  generateToken(payload) {
    const token = JwtStrategy.sign(payload);
    return token;
  },
  async generateAuthToken(userData) {
    try {
      const { id, roleId } = userData;
      const token = await TokenService.generateToken({
        id,
        roleId
      });
      return token;
    } catch (e) {
      throw new Error(e);
    }
  }
};
