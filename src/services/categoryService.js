/*import Category from "../models/category";
const getAll = async function ({page = 0, limit = 10}, userId) {
    try {
        const category = await Category.findById(userId);

        const filter = category.role === ROLES.ADMIN ? {} : {creator: userId};
        
        const Categories = await Category.find(filter).skip(parseInt(page*limit)).limit(parseInt(limit))
            .then((result) => {
                console.log('Categories is taken from database for user');
                return result;
            })
            .catch((err) => {
                throw new Error(`Category was not take... ${err}`);
            });
            
        return {Categories};
    } catch (error) {
        console.log('Something went wrong: Service: CategoryService.js', error);
        throw new Error(error);
    }
};

const createAllCategory = async function (id) {
    try {
        await Category.findByIdAndCreate(id)
            .then(() => {
                console.log('Category is created...');
            })
            .catch((err) => {
                throw new Error(`Category was not created... ${err}`);
            });
    } catch (error) {
        console.log('Something went wrong: Service: CategoryService.js', error);
        throw new Error(error);
    }
};

const deleteAllCategory = async function (id) {
    try {
        await Category.findByIdAndDelete(id)
            .then(() => {
                console.log('Category is deleted...');
            })
            .catch((err) => {
                throw new Error(`Category was not deleted... ${err}`);
            });
    } catch (error) {
        console.log('Something went wrong: Service: CategoryService.js', error);
        throw new Error(error);
    }
};


const putAllCategory = async function (id) {
    try {
        await Category.findByIdAndPut(id)
            .then(() => {
                console.log('Category is put...');
            })
            .catch((err) => {
                throw new Error(`Category was not put... ${err}`);
            });
    } catch (error) {
        console.log('Something went wrong: Service: CategoryService.js', error);
        throw new Error(error);
    }
};
export default { getAll, createAllCategory, deleteAllCategory, putAllCategory };*/

// categoryService.js

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
    return newCategory;
  } catch (error) {
    throw new Error(`Error in createCategory service: ${error.message}`);
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const deletedCategory = await Category.destroy({ where: { id: categoryId } });
    return deletedCategory;
  } catch (error) {
    throw new Error(`Error in deleteCategory service: ${error.message}`);
  }
};

const updateCategory = async (categoryId, categoryData) => {
  try {
    const [updatedRowsCount, updatedCategories] = await Category.update(categoryData, { where: { id: categoryId }, returning: true });
    if (updatedRowsCount > 0) {
      return updatedCategories[0].get();
    }
    throw new Error(`Category with id ${categoryId} not found`);
  } catch (error) {
    throw new Error(`Error in updateCategory service: ${error.message}`);
  }
};

export default{ getAllCategories, createCategory, deleteCategory, updateCategory };
