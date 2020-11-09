import bodyParser from 'body-parser';

export default function bodyParse(app) {
  app.use(bodyParser.urlencoded({ extended: false }));
}
