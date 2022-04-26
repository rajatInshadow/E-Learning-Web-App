const express = require('express')
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express()

app.use(bodyParser());
app.get('/', (req, res) => res.send('Hello World!'));

app.get('/api/fail', (req, res) => res.status(403).json({msg: 'You are not allowed to access this'}));

// app.use('/api/header', function(req, res, next) {
//   var token = req.get('X-AUTH-HEADER');
//   var user = jwt.decode(token);
//   if (user && user.user) {
//     return next();
//   }
//   return res.status(403).json({msg: 'Please login to access this information'});
// }, require('./header'));
app.use('/api/courses', require('./courses'));
app.use('/api/email', require('./emails'));

app.use('/api/header', require('./header'));
app.use('/api/team', require('./team'));
app.use('/api/conf_topic', require('./conf_topic'));
app.use('/api/fin_serve', require('./fin_serve'));
app.use('/api/img_grid', require('./img_grid'));
app.use('/api/testimonials', require('./testimonials'));
app.use('/api/bookasession', require('./bookasession'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));