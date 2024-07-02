// 'use strict';
const express = require('express');
const { Pool, Client } = require('pg');
const app = express();
const port = 4200;

const client = new Client({
  password: "password",
  user: "postgres",
  host: "postgres",
  database: "dockerete",
});

app.use(express.static(__dirname + "/dist"));

app.get("/users", async (req, res) => {
  const results = await client
    .query("SELECT * FROM users")
    .then((payload) => {
      return payload.rows;
    })
    .catch(() => {
      throw new Error("Query failed");
    });
  res.setHeader("Content-Type", "application/json");
  res.status(200);
  res.send(JSON.stringify(results));
});

app.get("/*", (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
  // res.setHeader("Content-Type", "text/html");
  // res.status(200);
  // res.send("<h1>Hello world</h1>");
  // res.sendFile('/home/skalluru/docker-compose/client/angularClient/src/index.html');
    //res.json({ info: 'Node.js, Express, and Postgres API' });

});


(async () => {
  await client.connect();

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
})();