import { getConnection } from './../database/database.js';

const getLicences = async () => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * from licence');
    return rows;
};

const getLicence = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('SELECT * FROM licence WHERE licence_id = ?;', params);
    return rows;
};

const createLicence = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('INSERT INTO licence (licence_name, licence_description, licence_image) VALUES ?;', [params]);
    return rows;
};

const updateLicence = async (params, id) => {
    const connection = getConnection();
    const [rows] = await connection.query('UPDATE licence SET ? WHERE ?;', [params, id]);
    return rows;
};

const deleteLicence = async (params) => {
    const connection = getConnection();
    const [rows] = await connection.query('DELETE FROM licence WHERE ?;', params);
    return rows;
};

export default {
    getLicences,    
    getLicence,
    createLicence,
    updateLicence,
    deleteLicence
};