import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema({
  title: {
    type: String,
    required: true,
  },

});

export default mongoose.model('User', Model);
