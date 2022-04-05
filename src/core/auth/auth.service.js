import { ErrorMessage } from 'constants/messages';
import ApiError from 'utils/ApiError';
import { UserService } from '../user/user.service';

export const AuthService = {
  async loginWithEmailAndPassword(email, password) {
    if (!email || !password) {
      throw new ApiError(400, ErrorMessage.requestErrorMessage.BAD_REQUEST);
    }
    let user = await UserService.findEmail(email);
    if (!user) {
      throw new ApiError(400, ErrorMessage.requestErrorMessage.USER_NOT_FOUND);
    }
    if (!(await UserService.comparePassword(password, user.password))) {
      throw new ApiError(400, ErrorMessage.requestErrorMessage.WRONG_PASSWORD);
    }
    return user;
  },
  async registerWithEmailAndPassword(payload) {
    const { email, password } = payload;
    if (!email || !password) {
      throw new ApiError(400, ErrorMessage.BAD_REQUEST);
    }
    if (await UserService.findEmail(email)) {
      throw new ApiError(400, ErrorMessage.requestErrorMessage.EXISTED_EMAIL);
    }
    return await UserService.createOne({ ...payload, roleId: 'R1' });
  }
};
