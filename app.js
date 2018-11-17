var express= require('express')


var app = express();
app.use(express.static('./public'))
app.listen(3000)
process.stdout.write("Server running");
module.exports=app;
