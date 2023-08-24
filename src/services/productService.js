import productModel from './../models/productModel.js';

const getProducts = async () => {
    const products = await productModel.findAll();
    return products;
};

const getProductsByLicence = async (licence_id) => {    
    const products = await productModel.findAll({
        where: {
            licence_id:licence_id,
        },
    });
    return products;
}

const getProduct = async (id) => {
    const product = await productModel.findByPk(id);
    return product;
};

const createProduct = async (params) => {
    const createdProduct = await productModel.create(params);
    return createdProduct;
};

const updateProduct = async (params, id) => {
    const product = await productModel.findByPk(id);
    if (!product) {
        return false;
    }
    const updatedProduct = await productModel.update(params);
    return true;
};

const deleteProduct = async (id) => {
    const product = await productModel.findByPk(id);
    if (!product) {
        return false;
    }
    await product.destroy();
    return true;
};

export default {
    getProducts,
    getProductsByLicence,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};