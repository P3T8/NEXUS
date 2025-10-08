import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306, //Sulis gépén ez 3307
  password: '',
  database: 'nexus'
});

app.get('/', (req, res) => {
    res.send('Szerver működik!');
});

app.get('/api/spaceships', (req, res) => {
    const sql = 'SELECT * FROM spaceships';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Hiba a lekérdezés során: ' + err.stack);
            res.status(500).send('Hiba a lekérdezés során');
            return;
        }
        res.json(results);
    });
});

app.post('/api/newspaceships', (req, res) => {
    const {nev, style_neve, evek } = req.body;
    const sql = 'INSERT INTO spaceships (nev, style_neve, evek) VALUES (?, ?, ?)';
    db.query(sql, [nev, style_neve, evek], (err, results) => {
        if (err) {
            res.status(400).send('Hiányos adatok');
            return;
        }
        res.status(201).json({ id: results.insertId });
    });
});

app.get('/api/type', (req, res) => {
    const sql = 'SELECT spaceship_neve, id FROM type';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Hiba a lekérdezés során: ' + err.stack);
            res.status(500).send('Hiba a lekérdezés során');
            return;
        }
        res.json(results);
    });
});

db.connect((err) => {
  if (err) {
    console.error('Hiba az adatbázis kapcsolódásakor:', err);
    return;
  }
  console.log('Kapcsolódva az adatbázishoz.');
});

app.listen(PORT, () => {
  console.log(`A szerver fut ${PORT} porton.`);
});
