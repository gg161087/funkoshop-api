import licenceModel from './../models/licenceModel.js';

const getLicences = async () => {
    const rows = await licenceModel.findAll();
    return rows;
};

const getLicence = async (params) => {  
    const rows = await licenceModel.findByPk(params);
    return rows;
};

const createLicence = async (params) => {
    const createdLicence = await licenceModel.create(params);
    return createdLicence;
};

const updateLicence = async (params, id) => {
    const licence = await licenceModel.findByPk(id);
    if (!licence) {
        return false
    }
    const updatedLicence = await licenceModel.update(params)
    return updatedLicence;
};

const deleteLicence = async (id) => {
    const licence = await licenceModel.findByPk(id);
    if (!licence) {
        return false
    }
    await licenceModel.destroy()
    return true;
};

export default {
    getLicences,    
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};