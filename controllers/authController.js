import { StatusCodes } from 'http-status-codes';

// extras
import User from '../models/UserModel.js';
import attachCookie from '../utils/attachCookie.js';
import { UnauthenticatedError } from '../errors/customErrors.js';

// @desc    Register user
// @route   Post /api/v1/auth/register
// @access  Public
export const register = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  const user = await User.create({ email, firstName, lastName, password });

  const token = user.createJWT();
  attachCookie({ res, token });

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
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  const passwordIsCorrect = await user.comparePasswords(password);
  if (!passwordIsCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const token = user.createJWT();
  attachCookie({ res, token });

  res.status(StatusCodes.OK).json({
    user: {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
};

// @desc    Logout user
// @route   GET /api/v1/auth/logout
// @access  Public
export const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logged out!' });
};
