import roleModel from './../models/roleModel.js';

const getRoles = async () => {  
    const roles = await roleModel.findAll();
    return roles;
};

const getRole = async (id) => {  
    const role = await roleModel.findByPk(id);
    return role;
};

const createRole = async (params) => {
    const createdRole = await roleModel.create(params);
    return createdRole;
};

const updateRole = async (params, id) => {
    const role = await roleModel.findByPk(id);
    if (!role) {
        return false;
    }     
    const updatedRole = await roleModel.update(params, {
        where: { role_id: role_id },
        returning: true,
    });
    console.log(updatedRole);
    return true;
};

const deleteRole = async (id) => {
    const role = await roleModel.findByPk(id);
    if (!role) {
        return false;
    }
    role.destroy();
    return true;
};

export default {
    getRoles,    
    getRole,
    createRole,
    updateRole,
    deleteRole
};