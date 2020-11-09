import express from 'express';
import home from './home';
import info from './info';

const app = express();
const PORT = 5000;

app.get('/', home);
app.post('/info', info);
app.use(apiNotFound);

function apiNotFound(req, res) {
  res.status(400).json('API not found');
}

app.listen(PORT, () => {
  console.log('Example app listening at http:localhost: ${PORT}');
});
