import userHasRoleModel from './../models/userHasRoleModel.js';

const getUserHasRole = async (id) => {
    const userRoles = await userHasRoleModel.findAll({
        where: {
            user_user_id:id
        }
    })
    return userRoles;
};