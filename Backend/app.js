const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// const errorHandlerMiddleware = require('./middleware/error-handler');
// const notfound = require('./middleware/not-found');
const pool = require('./db/connect.js');

app.use(express.json());
app.use(cors());

app.use('/api/form',require('./routes/Form_Routes.js'));
// app.use('/api/form', require('./routes/Form_Routes.js'));
// app.use('/api/form', require('./routes/Form_Routes.js'));
// app.use('/api/form', require('./routes/Form_Routes.js'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
