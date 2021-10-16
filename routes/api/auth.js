const express = require('express');

const { controllerWrapper, validation, authenticate } = require('../../middlewares');
const { joiSchema } = require('../../models/user');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/register', validation(joiSchema), controllerWrapper(ctrl.register));

router.post('/login', validation(joiSchema), controllerWrapper(ctrl.login));

router.get('/logout', authenticate, controllerWrapper(ctrl.logout));

router.get('/users/current', authenticate, controllerWrapper(ctrl.getUser));

router.patch('/users', authenticate, controllerWrapper(ctrl.changeStatus));

module.exports = router;
