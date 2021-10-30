/* 
File name      : index.js
Student’s Name : Asmae Allou  
StudentID      : 301159608
Date           : 30-10-2021
*/

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

//Get route for displaying the register page
router.get('/register', indexController.displayRegisterPage)

//Post route for processing the register page
router.post('/register', indexController.processRegisterPage)

//Get to perform user logout
router.get('/logout', indexController.performLogout)

module.exports = router;
