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

//router.get('login', indexController.)

//router.post('login', indexController.)


module.exports = router;
