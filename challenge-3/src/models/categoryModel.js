const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
   {
      name: { type: String, required: true, unique: true },
      path: { type: String, required: true, unique: true }, // Materialized Path
   },
   { timestamps: true }
);

// Only define the index once here
categorySchema.index({ path: 1 }); // Indexing for efficient lookups

module.exports = mongoose.model('Category', categorySchema);
