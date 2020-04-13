/* eslint-disable class-methods-use-this */
import autoBind from 'auto-bind';
import userData from '../database/userData';

class UserRepository {
  constructor() {
    this.userData = userData;
    autoBind(this);
  }

  async getUserDetails() {
    try {
      const user = await this.userData;
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
