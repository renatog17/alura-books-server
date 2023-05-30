const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    res.send('Olá mundo novamente')
})

router.post('/', (req, res) => {
    res.send('você fez uma requisição post')
})

router.put('/', (req, res) => {
    res.send('você fez uma requisição put')
})
router.delete('/', (req, res) => {
    res.send('você fez uma requisição delete')
})


module.exports = router