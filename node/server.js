const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const bodyParser = require('body-parser');

app.use('/', require('./router'));

// starting the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))