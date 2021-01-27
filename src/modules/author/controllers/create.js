import mongoose from 'mongoose';
import Author from '../Model';
import Book from '../../book/Model';

export default async function create(req, res) {
  const _id = mongoose.Types.ObjectId();
  const books = req.body.book;
  //CREATE NEW AUTHOR
  const newAuthor = new Author({
    _id,
    name: req.body.name,
    book: books,
  });

  //check that list of books tat sent exist, otherwise remove from array
  const promises = req.body.book.map((book) => {
    Book.findById(book)
      .exec()
      .then((doc) => {
        if (!doc) {
          newAuthor.books = books.filter((el) => el !== book);
        } else {
          //update book to add this author to book
          Book.findByIdAndUpdate({ _id: book }, { $addToSet: { author: _id } })
            .exec()
            .then(() => console.log('updated'))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        console.log(err);

        newAuthor.book = books.filter((el) => el !== book);
        // res.status(400).json('Book updateById error');
      });
  });

  await Promise.all(promises);
  //creqate Author
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
