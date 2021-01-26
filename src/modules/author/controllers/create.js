import mongoose from 'mongoose';
import Author from '../Model';

export default function create(req, res) {
  const _id = mongoose.Types.ObjectId();

  const newAuthor = new Author({
    _id,
    name: req.body.name,
    book: req.body.book,
  });

  console.log();

  newAuthor
    .save()
    .then(() => {
      res.status(200).json('Author created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author not created');
    });
}
