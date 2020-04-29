const mongoose = require("mongoose");

const CompanyModelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  revenue: {
    type: String,
    required: true,
  },
  PhoneCode: {
    type: Number,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("Company", CompanyModelSchema);
