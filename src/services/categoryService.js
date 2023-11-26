
import Category from '../models/category.js';

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
  
    return categories;
  } catch (error) {
    throw new Error(`Error in getAllCategories service: ${error.message}`);    
  }
};

const createCategory = async (categoryData) => {
  try {
    const newCategory = await Category.create(categoryData);
    newCategory.save();
    return newCategory;
  } catch (error) {
    throw new Error(`Error in createCategory service: ${error.message}`);
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const deletedCategory = await Category.destroy({ where: { id: +categoryId }, });
    
    return deletedCategory;
  } catch (error) {
    throw new Error(`Error in deleteCategory service: ${error.message}`);
  }
};

const updateCategory = async (categoryId, categoryData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Category.update(categoryData, { where: { id: +categoryId }, returning: true });
    
    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Category with id ${categoryId} not found`);
  } catch (error) {
    throw new Error(`Error in updateCategory service: ${error.message}`);
  }
};

export default{ getAllCategories, createCategory, deleteCategory, updateCategory };
