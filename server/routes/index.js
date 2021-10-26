var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //Create a page, look inside of the index.ejs file, then pass into the page an object with a property of title with "Express"
 res.render('index', {  title: 'Home'});
});


/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/*GET Contact Us*/
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});


module.exports = router;
