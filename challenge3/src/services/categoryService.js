const Category = require('../models/categoryModel');
const logger = require('../utils/logger'); // Import logger

// Add a new category
const addCategory = async (name) => {
   try {
      const category = new Category({ name, path: name });
      const savedCategory = await category.save();
      logger.info('Category "%s" created successfully', name);
      return savedCategory;
   } catch (error) {
      logger.error('Error adding category "%s": %s', name, error.message);
      throw error;
   }
};

// Add a subcategory under an existing category
const addSubcategory = async (parentName, subcategoryName) => {
   try {
      const parent = await Category.findOne({ name: parentName });
      if (!parent) {
         logger.warn('Parent category "%s" not found', parentName);
         throw new Error(`Parent category "${parentName}" not found`);
      }

      const path = `${parent.path}.${subcategoryName}`;
      const subcategory = new Category({ name: subcategoryName, path });
      const savedSubcategory = await subcategory.save();
      logger.info(
         'Subcategory "%s" added under "%s"',
         subcategoryName,
         parentName
      );
      return savedSubcategory;
   } catch (error) {
      logger.error(
         'Error adding subcategory "%s" under "%s": %s',
         subcategoryName,
         parentName,
         error.message
      );
      throw error;
   }
};

// Retrieve all subcategories under a category
const getSubcategories = async (categoryName) => {
   try {
      const category = await Category.findOne({ name: categoryName });
      if (!category) {
         logger.warn('Category "%s" not found', categoryName);
         throw new Error(`Category "${categoryName}" not found`);
      }

      const regex = new RegExp(`^${category.path}\\.`);
      const subcategories = await Category.find({ path: regex });
      logger.info('Retrieved subcategories under "%s"', categoryName);
      return subcategories;
   } catch (error) {
      logger.error(
         'Error retrieving subcategories under "%s": %s',
         categoryName,
         error.message
      );
      throw error;
   }
};

module.exports = { addCategory, addSubcategory, getSubcategories };
