import mongoose from 'mongoose';
import Book from '../Model';
import Author from '../../author/Model';

export default function create(req, res) {
  const _id = mongoose.Types.ObjectId();

  const newBook = new Book({
    _id,
    name: req.body.name,
    author: req.body.author,
  });

  console.log(req.body.author);
  //Update author

  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((doc) => {
        console.log(doc);
        doc.book = [...doc.book, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
        res.status(200).json(doc);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Author updateById error');
      });
  });

  //Create book
  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Book not created');
    });
}
