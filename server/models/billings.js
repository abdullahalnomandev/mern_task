import mongoose from "mongoose";

const billingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  paidAmount:{
    type: Number,
    required: true
  }
});

export default mongoose.model("Billings", billingSchema);