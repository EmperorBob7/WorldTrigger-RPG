require('dotenv').config();
const express = require("express");
const app = express();
const db = require('better-sqlite3')('servers.db');

app.use(express.static("public"));
app.use(express.json());

app.post("/create", (req, res) => {
    let data = req.body;
    const row = db.prepare('SELECT * FROM SERVERS WHERE name = ?').get(data.name);
    if(row != null) {
        res.json(JSON.stringify({success: false}));
    } else {
        db.prepare('INSERT INTO SERVERS VALUES (?)').run(data.name);
        res.json(JSON.stringify({success: true}));
    }
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});