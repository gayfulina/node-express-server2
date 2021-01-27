import mongoose from 'mongoose';
import Book from '../Model';
import Author from '../../author/Model';

export default async function create(req, res) {
  const _id = mongoose.Types.ObjectId();
  const authors = req.body.author;
  //CREATE NEW BOOK
  const newBook = new Book({
    _id,
    name: req.body.name,
    author: authors,
  });

  //check that list of authors tat sent exist, otherwise remove from array
  const promises = req.body.author.map(async (author) => {
    await Author.findById(author)
      .exec()
      .then((doc) => {
        if (doc) {
          doc.book = [...doc.book, _id];
          doc.save().catch((err) => {
            newBook.author = authors.filter((el) => el !== author);
            throw new Error(err);
          });
        } else {
          //update authors to add this book to author
          newBook.author = authors.filter((el) => el !== author);
        }
      })
      .catch((err) => {
        newBook.author = author.filter((el) => el !== author);
        console.log(err);
      });
  });

  await Promise.all(promises);
  //Create book
  newBook
    .save()
    .then(() => {
      res.status(200).json('Book created!!!');
    })
    .catch((err) => {
      res.status(400).json('Book not created');
      console.log(err);
    })
    .finally(() => {
      console.log('finally');
    });
}
