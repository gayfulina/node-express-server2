import Author from '../Model';

export default function create(req, res) {
  const newAuthor = new Author({
    name: req.body.name,
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
