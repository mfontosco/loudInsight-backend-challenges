const Category = require('../models/categoryModel');

// Add a new category
const addCategory = async (name) => {
   const category = new Category({ name, path: name });
   return await category.save();
};

// Add a subcategory under an existing category
const addSubcategory = async (parentName, subcategoryName) => {
   const parent = await Category.findOne({ name: parentName });
   if (!parent) throw new Error(`Parent category "${parentName}" not found`);

   const path = `${parent.path}.${subcategoryName}`;
   const subcategory = new Category({ name: subcategoryName, path });
   return await subcategory.save();
};

// Retrieve all subcategories under a category
const getSubcategories = async (categoryName) => {
   const category = await Category.findOne({ name: categoryName });
   if (!category) throw new Error(`Category "${categoryName}" not found`);

   const regex = new RegExp(`^${category.path}\\.`);
   return await Category.find({ path: regex });
};

module.exports = { addCategory, addSubcategory, getSubcategories };
