const Router = require('express').Router();

Router.get('/', (req, res) => {
    res.render('index', {
        title: 'Color Generator'
    })
})

Router.get('/shadow', (req, res) => {
    res.render('shadow', {
        title: 'Shadow Generator'
    })
})

Router.get('/password', (req, res) => {
    res.render('password', {
        title: 'Password Generator'
    })
})


module.exports = Router;