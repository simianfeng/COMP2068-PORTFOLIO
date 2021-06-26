  
let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
    let tools = [
      {
        'name': 'Node'
      },
      {
        'name': 'Express'
      },
      {
        'name': 'Handlebars'
      }];
  
    res.render('about', {
      title: 'This is the About Page',
      content: 'This is the tools we have used in this exercise:',
      tools: tools
    })
  });

module.exports = router;