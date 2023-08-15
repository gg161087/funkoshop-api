import categoryService from './../services/categoryService.js';

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        if (categories.length == 0) {
            res.status(404).json({success: false, message: 'bad request'});        
        }             
        res.json({success: true, data: categories});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await categoryService.getCategory(id);
        category.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: category});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createCategory = async (req, res) => {
    const body = req.body;    
    if( !body.category_name || !body.category_description ){
        res.json({ success: false, data: 'faltan campos'})      
    }
    let response = await categoryService.createCategory(body);
    res.json({ success: true, data: response})
};

const updateCategory = async (req, res) => {
    
};
const deleteCategory = async (req, res) => {
    const id = req.params.id;
    const result = categoryService.deleteCategory(id);
    console.log(result);
    /* if (result.affectedRow) {
        
    } */
};

export default {
    getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};