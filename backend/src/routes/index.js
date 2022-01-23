const getMessage = (req, res) => {
  const message = [
    {
      id: 1,
      message: 'Hello World',
    },
    {
      id: 2,
      message: 'Hello other World',
    },
  ]
  res.send(message)
}
export default getMessage
