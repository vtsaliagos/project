// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const knex = require('knex');

// const db = knex({
//     client: 'pg',
//     connection: {
//         host: '127.0.0.1',
//         user: 'postgres',
//         password: 'test',
//         database: 'loginformytvideo'
//     }
// })

// const app = express();

// let intialPath = path.join(__dirname, "public");

// app.use(bodyParser.json());
// app.use(express.static(intialPath));

// app.get('/login', (req, res) => {
//     res.sendFile(path.join(intialPath, "login.html"));
// })


// --------------------- //
const express = require('express');
const app = express();

app.use(express.json());

app.post('/register-user', (req, res) => {
    const { name, email, password } = req.body;

    // perform some validation and database operations here
    // ...

    // if registration is successful
    res.json({ name, email });
});

app.post('/login-user', (req, res) => {
    const { email, password } = req.body;

    // perform some validation and database operations here
    // ...

    // if login is successful
    res.json({ name: 'John Doe', email });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
