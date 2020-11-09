import express from 'express';
import home from './home';
import info from './info';
import errorHandler from './errorHandler';
import logger from './logger';

const app = express();
const PORT = 5000;

logger(app);

app.get('/', home);
app.post('/info', info);
errorHandler(app);

app.listen(PORT, () => {
  console.log('Example app listening at http:localhost: ${PORT}');
});
