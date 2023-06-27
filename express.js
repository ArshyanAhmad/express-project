const express = require('express');
const app = express()
const Router = require('./Router/routes')

app.use(Router)
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(8080, () => {
    console.log('Server listening on port at', 8080);
})