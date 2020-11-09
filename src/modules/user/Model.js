import mongoose from 'mongoose';

const { Schema } = mongoose;

const user = new Schema({
  email: String,
  password: String,
});
