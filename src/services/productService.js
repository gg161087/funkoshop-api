import { getConnection } from './../database/database.js';

const getProducts = async () => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
    return rows;
};

const getProductsByLicence = async (licence_id) => {
    const connection = getConnection(); 
    const [rows] = await connection.query('SELECT * FROM product WHERE licence_id = ?', licence_id);
    return rows; 
}

const getProduct = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM product WHERE product_id = ?;', params);
    return rows;
};

const createProduct = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, licence_id, category_id) VALUES ?;', [params]);
    return rows;
};

const updateProduct = async (params, id) => {
    const connection = getConnection();
    const [rows] = await connection.query('UPDATE product SET ? WHERE ?;', [params, id]);
    return rows;
};

const deleteProduct = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('DELETE FROM product WHERE ?;', params);
    return rows;
};

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};