import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  optionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const Option = mongoose.model("Option", optionSchema);

export default Option;
