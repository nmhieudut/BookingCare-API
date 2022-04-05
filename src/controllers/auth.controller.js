import { ErrorMessage } from 'constants/messages';
import { AuthService, TokenService, UserService } from 'services';

export const AuthController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await AuthService.loginWithEmailAndPassword(email, password);
      const token = await TokenService.generateAuthToken(user);
      delete user.password;
      return res.status(200).json({
        token,
        user
      });
    } catch (e) {
      next(e);
    }
  },
  async register(req, res, next) {
    try {
      const newUser = await AuthService.registerWithEmailAndPassword(req.body);
      const token = await TokenService.generateAuthToken(newUser);
      delete newUser.password;
      return res.status(200).json({
        token,
        user: newUser
      });
    } catch (e) {
      next(e);
    }
  },
  async logout(req, res, next) {},
  async loginGoogle(req, res, next) {},
  async loginFacebook(req, res, next) {},
  async loginGithub(req, res, next) {},
  async loginInstagram(req, res, next) {}
};
