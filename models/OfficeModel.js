const mongoose = require("mongoose");

const OfficeModelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longtitude: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
  },
  companyId: {
    type: String,
  },
});
module.exports = mongoose.model("Office", OfficeModelSchema);
