const db = require('_helpers/db');

module.exports = {
    getAll,
    getById,
};

async function getAll() {
    return await db.Factories.findAll();
}


async function getById(id) {
    return await getFactory(id);
}


// helper functions

async function getFactory(id) {
    const source = await db.Factories.findByPk(id);
    if (!source) throw 'Предприятие не найдено';
    return source;
}
