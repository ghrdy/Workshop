import { Schema, model } from 'mongoose';

const OptionSchema = new Schema({
    refersto: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0, required: true },
    color: { type: String, required: true}, // Calculated price after customization
    pictureUrl: {type: String,required:true},
    createdAt: { type: Date, default: Date.now },
  });

export default model('Option', OptionSchema);