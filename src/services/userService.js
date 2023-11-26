import User from "../models/user.js";

const getAllUsers = async () => {
  try {
    const Users = await User.findAll();

    return Users;
  } catch (error) {
    throw new Error(`Error in getAllUsers service: ${error.message}`);
  }
};

const createUser = async (UserData) => {
  try {
    const newUser = await User.create(UserData);
    newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(`Error in createUser service: ${error.message}`);
  }
};

const deleteUser = async (UserId) => {
  try {
    await User.destroy({ where: { id: +UserId } });
    ("");

    return UserId;
  } catch (error) {
    throw new Error(`Error in deleteUser service: ${error.message}`);
  }
};

const updateUser = async (UserId, UserData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await User.update(UserData, {
      where: { id: +UserId },
      returning: true,
    });

    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`User with id ${UserId} not found`);
  } catch (error) {
    throw new Error(`Error in updateUser service: ${error.message}`);
  }
};

export default { getAllUsers, createUser, deleteUser, updateUser };
