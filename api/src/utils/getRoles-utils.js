const { Role } = require('../db.js');

module.exports = {
    getRoles : async () => {
        const findedRoles = await Role.findAll();
        if(!findedRoles) throw Error('No roles found');

        return findedRoles;
    }
}
