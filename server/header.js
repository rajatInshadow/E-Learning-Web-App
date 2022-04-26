var express = require('express')
var router = express.Router();

const userName=[]
const event = [{name:'Event 1', url:"/event1"},
{name:'Event 2', url:"/event2"},
{name:'Past Events', url:"/event3"},];

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
 if(query){
  return res.status(200).json(event);
}

return res.status(200).json(event);

});
router.post('/', (req, res) => {
  let user = req.body;
   let foundEmail = userName.some(each => each === user);
   if (foundEmail) {
     return res.status(200).json({msg : 'Wrong Email and password'});}
    
  userName.push(user);
  return res.status(200).json({msg: 'Login succesfully '});
});

module.exports = router;