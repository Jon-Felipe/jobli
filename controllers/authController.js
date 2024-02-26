import { StatusCodes } from 'http-status-codes';

// extras
import User from '../models/UserModel.js';

// @desc    Register user
// @route   Post /api/v1/auth/register
// @access  Public
export const register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const user = await User.create({ email, firstName, lastName, password });

  res.status(StatusCodes.CREATED).json({
    user: {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
};

// @desc    Login user
// @route   Post /api/v1/auth/login
// @access  Public
export const login = async (req, res) => {
  res.send('login');
};
