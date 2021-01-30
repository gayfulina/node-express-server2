import Author from '../Model';
import Book from '../../book/Model';

export default async function updateById(req, res) {
  const authorId = req.params.authorId;
  const book = req.body.book;
  const updateAuthor = {
    name: req.body.name,
    book: book,
  };

  Author.updateOne({ _id: authorId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author updateById error');
    });
}
