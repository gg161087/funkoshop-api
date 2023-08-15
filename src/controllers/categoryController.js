import categoryService from './../services/categoryService.js';

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        categories.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: categories});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getCategory = async (req, res) => {
    try {
        const { id }= req.params;
        const category = await categoryService.getCategory(id);
        category.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: category});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createCategory = async (req, res) => {
    const body = req.body;    
    if( !body.category_name || !body.category_description ){
        return res.json({ success: false, data: 'faltan campos'});      
    }
    const result = await categoryService.createCategory(body);
    res.json({ success: true, data: result});
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { category_name, category_description } = req.body
    const [result] = categoryService.updateCategory({ category_name, category_description }, id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'actualizado correctamente'});
};
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    const [result] = categoryService.deleteCategory(id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'Eliminado correctamente'});
};

export default {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};