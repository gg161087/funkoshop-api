import User from './userModel.js';
import Role from './roleModel.js';
import UserHasRole from './userHasRoleModel.js';

User.belongsToMany(Role, { through: UserHasRole, foreignKey: 'user_user_id', as: 'roles' });
Role.belongsToMany(User, { through: UserHasRole, foreignKey: 'role_role_id', as: 'users' });