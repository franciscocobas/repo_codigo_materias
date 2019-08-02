const express = require('express');
const { Client } = require('pg');
const app = express();
app.listen(3000);

app.get('', function (req, res) {
    res.send('Bienvenido!')
})

app.get('/mensajes', function (req, res) {

    const client = new Client({
        user: "cambiar",
        host: "ip",
        database: "<nombre><db>",
        password: "<usuario>",
        port: 5432,
    });

    client.connect(err => {
        if (err) {
            res.send(err)
        } else {
            res.send('conectado')
        }
    })
    client.query("SELECT nombre FROM cliente where nombre = 'Ana Laura' ", (err, response) => {
        //console.log(response)
        res.send(response.rows)
        client.end()
    })
});