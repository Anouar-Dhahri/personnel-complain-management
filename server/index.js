const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const port = process.env.PORT || 5100;

const dbConnect = require('./database/connection');

dotenv.config();

app.use('uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/api/auth', require('./routes/Auth.routes'));
app.use('/api/users', require('./routes/User.routes'));
app.use('/api/account', require('./routes/Account.routes'));
app.use('/api/data', require('./routes/Data.routes'));
app.use('/api/hardware', require('./routes/Hardware.routes'));
app.use('/api/software', require('./routes/Software.routes'));
app.use('/api/updateaccount', require('./routes/UpdateAccount.routes'));
app.use('/api/app', require('./routes/App.routes'));

dbConnect();

app.get('/', (req, res) => res.send('The server is healthy '))
app.listen(port, () => console.log(`Server is running on port ${port}!`))