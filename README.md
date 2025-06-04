## poc-cache-aside 

**Cache aside pattern** uses **Redis** as a cache solution with **MongoDB** to save documents.

## endpoints

*   GET → `v1/api/products`  - return products from DB and cache it.
*   POST → `v1/api/invalidate-cache/{{cacheKey}}` - clean the cache based on the Redis cache key.

## arch-solution

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/4d81d0716c49aab2516e00ad10788402f3270e11a7e8480c.png)
