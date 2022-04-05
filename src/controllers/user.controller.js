import db from 'database/models';
import { UserService } from 'services';

export const UserController = {
  async getAll(req, res, next) {
    try {
      const users = await db.User.findAll();
      return res.send(users);
    } catch (e) {
      next(e);
    }
  },
  async getUser(rreq, res, next) {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id
        }
      });
      if (!user) {
        return res.status(404).send({
          message: 'User not found'
        });
      }
      return res.status(200).send(user);
    } catch (e) {
      next(e);
    }
  },
  async createUser(req, res, next) {
    return UserService.createOne(req.body);
  }
};
