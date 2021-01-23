import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    books: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
      },
    ],
  },

  { timestamps: {} },
);

export default mongoose.model('Author', Model);
