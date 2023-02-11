const mongoose = require("mongoose");

const connectDb = ()=>{
     mongoose.set('strictQuery', true);

  mongoose.connect("mongodb://localhost:27017/mycontacts-backend",{useUnifiedTopology : true,useNewUrlParser: true})
  .then(()=>console.log("connection successfull .."))
  .catch((err)=>console.log(err));
}

connectDb();