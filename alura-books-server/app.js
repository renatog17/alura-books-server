const express = require("express")
const app = express()
const rotaLivro = require("./rotas/livro")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/livros", rotaLivro)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})