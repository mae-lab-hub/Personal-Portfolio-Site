let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomepage);

/* GET Home page. */
router.get('/home', indexController.displayHomepage);

/* GET About page. */
router.get('/about',indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/*GET Contact Us*/
router.get('/contact', indexController.displayContactPage);

//Get route for displaying the login page
router.get('/login', indexController.displayLoginPage)

//Post route for processing the login page
router.post('/login', indexController.processLoginPage)

//Get to perform user logout
router.get('/login', indexController.performLogout)

module.exports = router;
