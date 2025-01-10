const {
   addCategory,
   addSubcategory,
   getSubcategories,
} = require('../services/categoryService');
const { successResponse, errorResponse } = require('../utils/response');
const logger = require('../utils/logger');
// Add category
const createCategory = async (req, res) => {
   try {
      const { name } = req.body;
      const category = await addCategory(name);
      logger.info('Category created: %o', category);
      return successResponse(res, 'Category created successfully', category);
   } catch (error) {
      logger.error('Error in createCategory: %s', error.message);
      return errorResponse(res, error.message);
   }
};

// Add subcategory
const createSubcategory = async (req, res) => {
   try {
      const { parentName, subcategoryName } = req.body;
      const subcategory = await addSubcategory(parentName, subcategoryName);
      logger.info('Subcategory created: %o', subcategory);
      return successResponse(
         res,
         'Subcategory created successfully',
         subcategory
      );
   } catch (error) {
      logger.error('Error in createSubcategory: %s', error.message);
      return errorResponse(res, error.message);
   }
};

// Get subcategories
const listSubcategories = async (req, res) => {
   try {
      const { categoryName } = req.params;
      const subcategories = await getSubcategories(categoryName);
      logger.info('Subcategories retrieved: %o', subcategories);
      return successResponse(
         res,
         'Subcategories retrieved successfully',
         subcategories
      );
   } catch (error) {
      logger.error('Error in listSubcategories: %s', error.message);
      return errorResponse(res, error.message);
   }
};

module.exports = { createCategory, createSubcategory, listSubcategories };
