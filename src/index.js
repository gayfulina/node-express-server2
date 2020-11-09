import express from 'express';
import home from './modules/home/home';
import info from './modules/info/info';
import errorHandler from './modules/core/errorHandler';
import logger from './modules/core/logger';
import parseResponse from './modules/core/parseResponse';
import cors from './modules/core/cors';

const app = express();
const PORT = 5000;

logger(app);
parseResponse(app);
cors(app);
app.get('/', home);
app.post('/info', info);
errorHandler(app);

app.listen(PORT, () => {
  console.log('Example app listening at http:localhost: ${PORT}');
});
