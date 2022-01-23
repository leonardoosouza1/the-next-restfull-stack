const getMessage = (req, res) => {
    const message = [
        {
            message: 'Hello World',
        },
        {
            message: 'Hello other World',
        },
    ]
    res.send(message)
}
export default getMessage