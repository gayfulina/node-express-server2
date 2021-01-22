import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  },

  { timestamps: {} },
);

export default mongoose.model('Book', Model);
