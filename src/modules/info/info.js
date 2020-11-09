let count = 0;

export default function info(req, res) {
  res.send('INFO here! ' + count++);
}
