const {
   addCategory,
   addSubcategory,
   getSubcategories,
} = require('../services/categoryService');
const { successResponse, errorResponse } = require('../utils/response');

// Add category
const createCategory = async (req, res) => {
   try {
      const { name } = req.body;
      const category = await addCategory(name);
      return successResponse(res, 'Category created successfully', category);
   } catch (error) {
      return errorResponse(res, error.message);
   }
};

// Add subcategory
const createSubcategory = async (req, res) => {
   try {
      const { parentName, subcategoryName } = req.body;
      const subcategory = await addSubcategory(parentName, subcategoryName);
      return successResponse(
         res,
         'Subcategory created successfully',
         subcategory
      );
   } catch (error) {
      return errorResponse(res, error.message);
   }
};

// Get subcategories
const listSubcategories = async (req, res) => {
   try {
      const { categoryName } = req.params;
      const subcategories = await getSubcategories(categoryName);
      return successResponse(
         res,
         'Subcategories retrieved successfully',
         subcategories
      );
   } catch (error) {
      return errorResponse(res, error.message);
   }
};

module.exports = { createCategory, createSubcategory, listSubcategories };
