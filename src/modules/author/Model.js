import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    bookTitle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true,
    },
  },

  { timestamps: {} },
);

export default mongoose.model('Author', Model);
