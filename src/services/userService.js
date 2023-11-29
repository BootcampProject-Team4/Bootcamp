import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async function (email, password) {
  try {
    const user = await User.findOne({where :{ email: email }});
    if (!user) {
      throw new Error("Email or Password wrong");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error("Email or Password wrong");
    }

    const token = await createToken(user);

    return token;
  } catch (error) {
    console.log("Something went wrong: Service: login", error);
    throw new Error(error);
  }
};

const createToken = async function (user) {
  try {
    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRATION_DATE,
    });
    return { accessToken: token};
  } catch (error) {
    console.log("Something went wrong: Service: login", error);
    throw new Error(error);
  }
};

const getById = async (id) => {
  try {
    const user = await User.findOne({ where: { id: id } });

    if (!user) throw new Error(`User is not found`);
    return user;
  } catch (error) {
    throw new Error(`Error in getById service: ${error.message}`);
  }
};

const getAllUsers = async (page, size) => {
  try {
    const offset = (page - 1) * size;
    const Users = await User.findAll({ offset: offset, limit: size });

    return Users;
  } catch (error) {
    throw new Error(`Error in getAllUsers service: ${error.message}`);
  }
};

const createUser = async (UserData) => {
  try {
    const { username, email, password } = UserData;
    const hashedpassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({ username, email, password:hashedpassword });
    newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(`Error in createUser service: ${error.message}`);
  }
};

const deleteUser = async (UserId) => {
  try {
    const user = await User.findOne({ where: { id: +UserId } });

    if (!user) throw new Error(`User is not found`);

    await User.destroy({ where: { id: +UserId } });

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

export default { getAllUsers, createUser, deleteUser, updateUser, getById , login};
