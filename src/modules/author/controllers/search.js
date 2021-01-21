import Author from '../Model';

export default function search(req, res) {
  Author.find()
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author get all error');
    });
}
