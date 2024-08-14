import User from "../models/User.js";

class UserService {
  async find() {
    return await User.find();
  }

  async findById(id) {
    return await User.findById(id);
  }

  async create(user) {
    return await User.create(user);
  }

  async delete(id) {
    return await User.findByIdAndDelete(id);
  }
}

export default new UserService();
