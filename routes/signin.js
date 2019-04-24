var express = require('express');
var router = express.Router();
var db = require ('../controllers/signin');
const authMiddlaware = require ('../middleware/auth');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('authentication moda foka');
});

// router.get('/', );
// router.post('/', authMiddlaware.autMiddleware, db.signIn);
router.post('/', db.signIn);

module.exports = router;
