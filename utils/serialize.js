// Handles serialization of data for handlebars.js
const serialize = serializeRow => serializeRow.get({ plain: true });

module.exports = serialize;