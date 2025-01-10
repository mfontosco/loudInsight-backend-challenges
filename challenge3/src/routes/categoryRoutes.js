const express = require('express');
const {
   createCategory,
   createSubcategory,
   listSubcategories,
} = require('../controllers/categoryController');

const router = express.Router();

router.post('/category', createCategory); // Add category
router.post('/subcategory', createSubcategory); // Add subcategory
router.get('/category/:categoryName', listSubcategories); // Retrieve subcategories

module.exports = router;
