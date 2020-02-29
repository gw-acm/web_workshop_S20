var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getUsername', function(req, res, next) {
  res.json({username: 'pcodes'});
});

router.get('/getHighscore', (req, res) => {
    res.json({highscore: 9000});
});

module.exports = router;
