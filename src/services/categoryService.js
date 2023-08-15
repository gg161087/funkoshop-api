import { getConnection } from './../database/database.js';

const getCategories = async () => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * from category');
    return rows;
};

const getCategory = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM category WHERE category_id = ?;', params);
    return rows;
};

const createCategory = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('INSERT INTO category (category_name, category_description) VALUES ?;', [params]);
    return rows;
};

const updateCategory = async (params, id) => {
    const connection = getConnection();
    const [rows] = await connection.query('UPDATE category SET ? WHERE ?;', [params, id]);
    return rows;
};

const deleteCategory = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('DELETE FROM category WHERE ?;', params);
    return rows;
};

export default {
    getCategories,    
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};