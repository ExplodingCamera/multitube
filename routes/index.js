var express = require('express');
var router = express.Router();
/* wenn ich kein template nehmen will res.send */
router.get('/:video1/:video2/', function(req, res, next) {
  if(!req.query.startSeconds){
    req.query.startSeconds = 0;
  }
  res.render('video', {
    video1: req.params.video1,
    video2: req.params.video2,
    startSeconds: req.query.startSeconds ,
  });
});
router.get('/', function(req, res, next) {
  res.render('index', {
  });
});
module.exports = router;
