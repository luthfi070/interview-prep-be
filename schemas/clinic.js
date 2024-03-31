const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema({
  name: String,
  open: String,
  close: String,
  timeSlot: Number,
  quota: Number,
});

module.exports = mongoose.model("Clinic", clinicSchema);
