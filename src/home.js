export default function home(req, res) {
  res.status(200).json({
    name: 'PASV',
    components: ['abc', 'def', 'ghi'],
    q: true,
  });
}
