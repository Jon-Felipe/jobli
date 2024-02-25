import { StatusCodes } from 'http-status-codes';

// extras
import User from '../models/UserModel.js';
import { NotFoundError } from '../errors/customErrors.js';

// @desc    Register user
// @route   Post /api/v1/auth/register
// @access  Public
export const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'User already exists' });
  }

  const user = await User.create({ firstName, lastName, email, password });
  res.status(StatusCodes.OK).json({ user, msg: 'user created' });
};

// @desc    Login user
// @route   Post /api/v1/auth/login
// @access  Public
export const login = async (req, res) => {
  res.send('login');
};
