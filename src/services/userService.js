import userModel from './../models/userModel.js';

const getUsers = async () => {  
    const users = await userModel.findAll();
    return users;
};

const getUser = async (id) => {  
    const user = await userModel.findByPk(id);
    return user;
};

const createUser = async (params) => {
    const createdUser = await userModel.create(params);
    return createdUser;
};

const updateUser = async (params, id) => {
    const user = await userModel.findByPk(id);
    if (!user) {
        return false;
    }
    const updatedRole = await userModel.update(params);
    return true;
};

const deleteUser = async (id) => {
    const user = await userModel.findByPk(id);
    if (!user) {
        return false;
    }
    role.destroy();
    return true;
};

export default {
    getUsers,    
    getUser,
    createUser,
    updateUser,
    deleteUser
};