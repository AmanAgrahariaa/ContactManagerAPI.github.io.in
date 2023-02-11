const express = require('express');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require('dotenv').config();
 
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());  
// this is a inbuilt middleware this will provide a parser which will parse data that we receive from client on server side (like create contact)
app.use("/api/contacts",require("./routes/contactRoutes"));
// app.use is middleware /api/contacts is common for all routes
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, ()=>{
     console.log(`server is running on port ${port}`);
});



