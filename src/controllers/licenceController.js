import licenceService from '../services/licenceService.js';

const getLicences = async (req, res) => {
    try {
        const licences = await licenceService.getLicences();
        licences.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: licences});       
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getLicence = async (req, res) => {
    try {
        const { id } = req.params
        const licence = await licenceService.getLicence(id);
        licence.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: licence});  
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createLicence = async (req, res) => {
    const body = req.body;    
    if( !body.licence_name || !body.licence_description || !body.licence_image){
        return res.json({ success: false, data: 'faltan campos'})      
    }
    const result = await licenceService.createLicence(body);
    res.json({ success: true, data: result});
};

const updateLicence = async (req, res) => {
    const { id } = req.params;
    const { licence_name, licence_description, licence_image} = req.body
    const result = licenceService.updateLicence({ licence_name, licence_description, licence_image}, id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'actualizado correctamente'});
};
const deleteLicence = async (req, res) => {
    const { id } = req.params;
    const result = licenceService.deleteLicence(id);
    result.affectedRows <= 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success:true, message: 'Eliminado correctamente'});
};

export default {
    getLicences,
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};