const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SaleSchema = Schema({
    documentoCliente: Number,
    nombreCliente: String,
    documentoVendedor: Number,
    valor: Number,
    fecha: Date
})

module.exports = mongoose.model('sales', SaleSchema);