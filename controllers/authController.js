// extras
import User from '../models/UserModel.js';

// @desc    Register user
// @route   Post /api/v1/auth/register
// @access  Public
export const register = async (req, res) => {
  await User.create(req.body);
  res.status(200).json({ msg: 'user created' });
};

// @desc    Login user
// @route   Post /api/v1/auth/login
// @access  Public
export const login = async (req, res) => {
  res.send('login');
};
