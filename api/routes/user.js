const mongoose = require('mongoose');
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../auth/check-auth');

//Create new user
router.post('/signup', UserController.user_signup);

//Authenticate and login a user
router.post('/login', UserController.user_login);

