import UserService from '../services/UserService';

class UserController {
  static async getUser(req, res, next) {
    try {
      const userService = new UserService();
      const user = await userService.fetchUser();
      return res.status(200).json({ data: user });
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
