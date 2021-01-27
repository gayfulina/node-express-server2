import Author from '../Model';
import Book from '../../book/Model';

export default async function updateById(req, res) {
  const authorId = req.params.authorId;
  const book = req.body.book;
  const  updateAuthor = {
      name: req.body.name,
      book: book,
  };

  await Author.findById(authorId)
      .exec()
      .then((doc) => {
        //-------------------------------------------------------------------------------------------------------------
        req.body.book.forEach((book) => {
            if(!doc.book.includes(book)) {
          Book.findOneAndUpdate({_id: book}, { $addToSet: { author: authorId } })
              .exec()
              .then((doc) => {
                if (doc) {
                  console.log('books list updated');
                } else {
                  console.log('books list not updated')
                }
              })
              .catch((error) => {
            console.log('error in catch of author find oneAndUpdate')
            updateAuthor.book = book.filter((el) => el !== book)
          });
        }
      });
  //---------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------
doc.book.forEach((book) => {
  if (!req.body.book.includes(book)) {
      Book.findOneAndUpdate({_id: book}, {$pull: {book: authorId}})
          .exec()
          .then((doc) => {
              if (doc) {
                  console.log('books list updated');
              } else {
                  console.log('books list not updated')
              }
          })
          .catch((err) => {
              console.log('error in catch of book find oneAndUpdate')
              updateAuthor.book = book.filter((el) => el !== book)
          });
  }
});

  Author.updateOne({ _id: authorId }, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Author updateById error');
    });
});
