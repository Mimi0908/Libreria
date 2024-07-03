const express = require('express');
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(cors()); // Middleware de CORS debe estar al inicio
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    let config = {
        method: "GET",
        url: "https://api.jsonbin.io/v3/b/6654d652acd3cb34a84e8a8b",
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$/aFDbFN3GK7KuDegqa8fmeFkmRR/TdLfj0B2gX4NSb5Kactr4HZEG'
        }
    };
    axios(config)
        .then(result => {
            res.send(result.data.record);
        })
        .catch(error => {
            res.status(500).send({ error: 'Error fetching data from API' });
        });
});

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

const user = require("./controller/userController");
app.use("/Sign-Up", user.registerDB);
app.use("/Login", user.loginDB);

const conexion = require('./configDB/configDB.js')

app.get("/todos-los-Usuarios", (req, res) => {
    conexion.connect(function (err) {
        if (err) throw err;
        //Select all customers and return the result object:
        conexion.query("SELECT * FROM sql10717599.usuario", function (err, result, fields) {
            if (err) throw err;
            res.send(result)
        });
    });
})


const PORT = 3001
app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto ", PORT)
})


