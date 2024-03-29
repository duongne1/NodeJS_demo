const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebar = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebar({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});
//IP: 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})