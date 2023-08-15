import licenceService from '../services/licenceService.js';

const getLicences = async (req, res) => {
    try {
        const licences = await licenceService.getLicences();
        if (licences.length == 0) {
            res.status(404).json({success: false, message: 'bad request'});        
        }             
        res.json({success: true, data: licences});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }  
}

const getLicence = async (req, res) => {
    try {
        const id = req.params.id
        const licence = await licenceService.getLicence(id);
        licence.length == 0 ? res.status(404).json({success: false, message: 'bad request'}) : res.json({success: true, data: licence});
       /*  if (licence.length == 0) {
            res.status(404).json({success: false, message: 'bad request'});        
        } else {
            res.json({success: true, data: licence});
        } */
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const createLicence = async (req, res) => {
    const body = req.body;    
    if( !body.licence_name || !body.licence_description || !body.licence_image){
        res.json({ success: false, data: 'faltan campos'})      
    }
    let result = await licenceService.createLicence(body);
    res.json({ success: true, data: result})
};

const updateLicence = async (req, res) => {
    const id = req.params.id
    const { licence_name, licence_description, licence_image} = req.body
    const result = licenceService.updateLicence({ licence_name, licence_description, licence_image}, id)
    console.log(result);
};
const deleteLicence = async (req, res) => {
    const id = req.params.id;
    const result = licenceService.deleteLicence(id);
    console.log(result);
    /* if (result.affectedRow) {
        
    } */
};

export default {
    getLicences,
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};