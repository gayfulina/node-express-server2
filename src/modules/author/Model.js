import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    bookTitle: {},
  },

  { timestamps: {} },
);

export default mongoose.model('Author', Model);
