import infoRouter from '../info/Routes';
import userRouter from '../user/Routes';
import baseRouter from '../_base/Routes';
import bookRouter from '../book/Routes';

export default function routes(app) {
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
  app.use('/base', baseRouter);
  app.use('/book', bookRouter);
}
