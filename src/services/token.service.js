import { JwtStrategy } from 'plugins';

export const TokenService = {
  async generateAuthToken(userData) {
    try {
      const { id, roleId } = userData;
      const token = await JwtStrategy.sign({
        id,
        roleId
      });
      return token;
    } catch (e) {
      throw new Error(e);
    }
  }
};
