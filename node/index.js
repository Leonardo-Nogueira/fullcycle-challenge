const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

const config={
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get( '/', (req, res) => {
    const mySqlConnection = mysql.createConnection(config)
    getAllNomes(res,mySqlConnection);
})

function getAllNomes(res, mySqlConnection) {
    const QUERY = `SELECT id, nome FROM people`;
  
    mySqlConnection.query(QUERY, (err, results) => {

      const people = results
        .map(
          (person) => `
          <tr>
            <td>${person.id}</td>
            <td>${person.nome}</td>
          </tr>
        `
        )
        .join('');

      const row = `
        <table border="1">
          <tr>
            <th>Id da pessoa </th>
            <th>Nome da pessoa</th>
          </tr>${people}
        </table>`;
  
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${row}
      `);
  
      mySqlConnection.end();
    });
}

app.listen(port)

