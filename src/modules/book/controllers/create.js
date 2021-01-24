import Book from '../Model';
import * as Author from 'mongoose';

export default function create(req, res) {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
  });

  //Update author

  req.body.forEach((author) => {
    Author.findById({ _id: author })
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json('Author updateById error');
      });
  });

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
