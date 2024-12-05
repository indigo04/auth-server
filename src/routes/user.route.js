const express = require('express');
const { userController } = require('../controllers/user.controller.js');
const { authMiddleware } = require('../middlewares/authMiddleware.js');
const { catchError } = require('../middlewares/catchMiddleware.js');
const { authController } = require('../controllers/auth.controller.js');

const userRouter = new express.Router();

userRouter.get('/', authMiddleware, catchError(userController.getAll));

userRouter.post(
  '/changePassword/:userName',
  authMiddleware,
  catchError(authController.resetPassword),
);

userRouter.post(
  '/reset/:userName',
  authMiddleware,
  catchError(authController.reset),
);

module.exports = { userRouter };
