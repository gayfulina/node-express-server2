import mongoose from 'mongoose';
import Author from '../Model';
import Book from '../../book/Model';

export default function create(req, res) {
  const _id = mongoose.Types.ObjectId();

  const newAuthor = new Author({
    _id,
    name: req.body.name,
    book: req.body.book,
  });

  console.log(req.body.book);
  // update book

  req.body.book.forEach((book) => {
    Book.findById(book)
      .exec()
      .then((doc) => {
        console.log(doc);
        doc.author = [...doc.author, _id];
        doc.save().catch((e) => {
          throw new Error(e);
        });
        res.status(200).json(doc);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Book updateById error');
      });
  });

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
