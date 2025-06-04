const router = require("express").Router();
const mongoose = require("mongoose");
const redis = require("../db/redis");
router.route("/products").get(async(req, res) => {
    const cacheKey = "products";
    const cachedProducts = await redis.get(cacheKey);
    if(cachedProducts){
        return res.status(200).json(JSON.parse(cachedProducts));    
    }
    const productsSchema = new mongoose.Schema({ title: String, description: String, price: Number });
    const Products = mongoose.model('products', productsSchema);
    const products = await Products.find();
    await redis.set(cacheKey, JSON.stringify(products));
    return res.status(200).json(products);
});
module.exports = router;