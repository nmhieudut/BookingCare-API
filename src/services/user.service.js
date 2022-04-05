import db from 'database/models';
import { bcryptService } from 'plugins';

export const UserService = {
  comparePassword(password, hash) {
    return bcryptService.compareSync(password, hash);
  },
  findEmail(email) {
    return db.User.findOne({ where: { email }, raw: true });
  },
  createOne(user) {
    const hashedPassword = bcryptService.hashSync(user.password);
    return db.User.create({
      ...user,
      password: hashedPassword,
      gender: user.gender === '1' ? true : false
    }).then(result => {
      return result.get({ plain: true });
    });
  }
};
