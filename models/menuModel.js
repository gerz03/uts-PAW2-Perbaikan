const mongoose = require('mongoose');

const alamatSchema = new mongoose.Schema({
  jalan: String,
  kota: String,
}, { _id: false });

const menuSchema = new mongoose.Schema({
  nama: { type: String, required: [true, 'nama wajib diisi'], trim: true },
  harga: { type: Number, required: [true, 'harga wajib diisi'] },
  alamat: alamatSchema,
  kategoriId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kategori' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Menu', menuSchema);