import autoBind from 'auto-bind';
import UserRepository from '../repositories/UserRepository';

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
    autoBind(this);
  }

  async fetchUser() {
    try {
      const userDetails = await this.userRepository.getUserDetails();
      return userDetails;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
