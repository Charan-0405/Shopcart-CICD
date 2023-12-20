const express = require('express');

const { createCategory, getAllCategories, getCategory, destroyCategory, getProductsForCategory } = require('../../controllers/category_controller');
const { createCategoryValidator } = require('../../middlewares/category_middleware');

const categoryRouter = express.Router();


categoryRouter.post('/', 
                createCategoryValidator, 
                createCategory); // mapping a route to a controller
                
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.delete('/:id', destroyCategory);
categoryRouter.get('/:id/products', getProductsForCategory);


// GET /api/v1/categories/:id -> 
// GET /api/v1/categories -> all categories

module.exports = categoryRouter;