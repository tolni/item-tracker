const express = require('express')
const app = express()

app.use(express.static('client'))
app.use(express.json())

const items = [
  {
    name: '',
    location: ''
  }

]

app.get('/item/question', function (req, resp) {
  const q = req.query.item_question
  const answers = []
  for (const item of items) {
    if (item.name.includes(q) || item.location.includes(q)) {
      answers.push(item)
    }
  }
  resp.json(answers)
})

app.post('/item/add', function (req, resp) {
  const newItem = req.body
  items.push(newItem)
  resp.json(items)
})

module.exports = app
