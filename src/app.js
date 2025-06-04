 require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./db/connection");
const products = require("./routes/products");
const invalidate = require("./routes/invalidate");
connection();
app.use(express.json());
app.use("/v1/api/", products);
app.use("/v1/api/", invalidate);
app.listen(process.env.PORT, function(){
    console.log("#### App listening at port: " + process.env.PORT + " ####");
});