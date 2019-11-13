const express=require('express');
const app=express();
const port=process.env.PORT||3000;
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static('public'));
app.listen(port,()=>{
console.log(`starting server at port ${port}...`);
});
const router=express.Router();
module.exports=router;