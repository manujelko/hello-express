express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Hello, World!");
    next();
});

app.use('/users', (req, res, next) => {
    const payload = `
    <html>
    <heading>
        <title>Users</title>
    </heading>
    <body>
        <ul>
            <li>User 1</li>
            <li>User 2</li>
        </ul>
    </body>
    </html>
    `;
    res.send(payload);
});

app.use('/', (req, res, next) => {
    const payload = `
    <html>
    <heading>
        <title>Greetings</title>
    </heading>
    <body>
        <p>Hello, World</p>
    </body>
    </html>
    `
    res.send(payload);
});

app.listen(3000);