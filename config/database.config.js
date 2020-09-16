const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const url = process.env.DATABASE;
mongoose.connect(url, {
    useNewUrlParser: true
})
.then(()=>{
    console.log("Successfully conected to database");
})

.catch(err =>{
    console.log("Error occured while connecting" +err);
    process.exit();
})