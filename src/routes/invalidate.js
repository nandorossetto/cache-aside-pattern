const router = require("express").Router();
const redis = require("../db/redis");
router.route("/invalidate-cache/:id").post(async(req, res) => {
    const invalidateCacheKey = req.params.id;
    const isDeleted = await redis.del(invalidateCacheKey);
    console.log(invalidateCacheKey, isDeleted);
    if(isDeleted){
        return res.status(200).json({ message: "Invalidated Key " + invalidateCacheKey + " is done" });
    }
    return res.status(404).json({ message: "Key " + invalidateCacheKey + " isn't founded or deleted" });
});
module.exports = router;