MongoDB Schema:
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define “Product” schema
const productSchema = new Schema({
  name: String,
  description: String,
  category_id: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
  inventory_id: { type: Schema.Types.ObjectId, ref: 'ProductInventory' },
  price: Number,
  discount_id: { type: Schema.Types.ObjectId, ref: 'Discount' },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Define “Product Category” schema
const productCategorySchema = new Schema({
  name: String,
  description: String,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Define “Product Inventory” schema
const productInventorySchema = new Schema({
  quantity: Number,
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Define “Discount” schema
const discountSchema = new Schema({
  name: String,
  description: String,
  discount_percent: Number,
  active: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  modified_at: { type: Date, default: Date.now },
  deleted_at: Date
});

// Create models
const Product = mongoose.model('Product', productSchema);
const ProductCategory = mongoose.model('ProductCategory', productCategorySchema);
const ProductInventory = mongoose.model('ProductInventory', productInventorySchema);
const Discount = mongoose.model('Discount', discountSchema);

module.exports = { Product, ProductCategory, ProductInventory, Discount };
