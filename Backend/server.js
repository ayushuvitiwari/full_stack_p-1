const app = require('./src/app.js');
const connectDB = require("./src/db/db");

connectDB();

app.listen(3000, (req , res)=>{
    console.log("server is runing on port 3000");
    
})