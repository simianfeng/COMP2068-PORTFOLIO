const { request, response } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simon Feng' });
});
let tools = [{name:'Express'}, {name: 'NodeJS'}, {name:'HandleBars'}];
let skills = [{name:'Java'}, {name:'Javascript'},{name:'Swift'},{name:'C#'},{name:'SQL'},{name:'HTML/CSS'}]

router.get('/about', (request, response, next)=>{
  response.render('about', {title:'About Me', tools: tools, school:"Georgian College", skills: skills});
})

router.get('/projects', (request, response, next)=>{
  response.render('projects', {title:'Projects'});
})

router.get('/contacts', (request, response, next)=>{
  response.render('contacts', {title:'Contact Me'});
})

module.exports = router;
