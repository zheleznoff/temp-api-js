const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
};

async function getAll() {
    return await db.Workshop.findAll();
}


async function getById(id) {
    return await getWorkshop(id);
}


// helper functions

async function getWorkshop(id) {
    const source = await db.Workshop.findByPk(id);
    if (!source) throw 'Цех не найдет';
    return source;
}
