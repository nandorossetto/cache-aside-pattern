const mongoose = require("mongoose");
async function main() {
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb://localhost:27017/products");
        console.log("Mongo is connected");
    }catch(error){
        console.log("Mongo error: ", error);
    }
}
module.exports = main