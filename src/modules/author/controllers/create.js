import mongoose from 'mongoose';
import Author from '../Model';
import Book from '../../book/Model';

export default async function create(req, res) {
  const _id = mongoose.Types.ObjectId();
  const book = req.body.book;

  // Check books
  const bookGetByIdResult = await Book.findById(book)
    .exec()
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((err) => {
      console.log(err);
      //res.status(400).json('Author get all error');
    });

  console.log(bookGetByIdResult);
  //CREATE NEW AUTHOR
  const newAuthor = new Author({
    _id,
    name: req.body.name,
    book: book,
  });

  //create Author
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
