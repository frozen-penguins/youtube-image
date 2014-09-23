var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  if (req.query.youtube && req.query.image) {
    var youtubeID = req.query.youtube.split('?v=')[1];
    res.render('index', { title: 'Youtube', youtube: youtubeID, image: req.query.image });
  }
  else {
    res.render('error', { message: 'No image or YouTube-link defined', error: { status: 500 }, title: 'No data' });
  }
});

module.exports = router;
