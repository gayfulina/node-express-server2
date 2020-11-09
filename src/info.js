export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  res.send('INFO here! ' + sum);
}
