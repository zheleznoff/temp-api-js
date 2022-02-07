const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
};

async function getAll() {
    return await db.Providers.findAll();
}


async function getById(id) {
    return await getProvider(id);
}


// helper functions

async function getProvider(id) {
    const source = await db.Providers.findByPk(id);
    if (!source) throw 'Предприятие не найдено';
    return source;
}
