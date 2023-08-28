import { UserHasRole } from './../models/indexModels.js';

const getUserHasRole = async (id) => {
    const userRoles = await UserHasRole.findAll({
        where: {
            user_user_id:id
        }
    })
    return userRoles;
};