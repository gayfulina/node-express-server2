import Book from '../Model';
import Author from '../../author/Model';

export default function create(req, res) {
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
  });

  console.log(req.body.author);
  //Update author

  req.body.author.forEach((author) => {
    Author.findById(author)
      .exec()
      .then((result) => {
        console.log(result);
        res.status(200).json(result);
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
