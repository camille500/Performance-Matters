const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    test();
    res.render('movies/index');
});

const test = () => {
  console.log('test')
}

module.exports = router;
