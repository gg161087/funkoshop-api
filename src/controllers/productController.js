import productService from './../services/productService.js';

const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        products.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: products});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await productService.getProduct(id);
        product.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: product});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createProduct = async (req, res) => {
    const body = req.body;
    if(
        !body.product_name ||
        !body.product_description ||
        !body.price ||
        !body.stock ||
        !body.discount ||
        !body.sku ||
        !body.dues ||
        !body.image_front ||
        !body.image_back ||
        !body.license_id ||
        !body.category_id
    ){
        return res.json({ success: false, data: 'faltan campos'}) 
    }     
    const result = await productService.createProduct(body);
    res.json({ success: true, data: result});    
};

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, license_id, category_id} = req.body
    const [result] = productService.updateProduct({ product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, license_id, category_id}, id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'actualizado correctamente'});
};
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const [result] = await productService.deleteProduct(id);
    result.affectedRows <=0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'Eliminado correctamente'});
};

export default {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};