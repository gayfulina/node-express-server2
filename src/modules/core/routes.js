import infoRouter from '../info/Rotes';

export default function routes(app) {
  app.use('/info', infoRouter);
}
