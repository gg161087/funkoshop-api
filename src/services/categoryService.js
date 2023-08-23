import categoryModel from './../models/categoryModel.js';

const getCategories = async () => {  
    const categories = await categoryModel.findAll();
    return categories;
};

const getCategory = async (id) => {  
    const category = await categoryModel.findByPk(id);
    return category;
};

const createCategory = async (params) => {
    const createdCategory = await categoryModel.create(params);
    return createdCategory;
};

const updateCategory = async (params, id) => {
    const category = await categoryModel.findByPk(id);
    if (!category) {
        return false;
    }
    const updatedCategory = await categoryModel.update(params);
    return true;
};

const deleteCategory = async (id) => {
    const category = await categoryModel.findByPk(id);
    if (!category) {
        return false;
    }
    category.destroy();
    return true;
};

export default {
    getCategories,    
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};