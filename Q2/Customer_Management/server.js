const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cdac',
  database: 'dac',
});

app.get('/api/customers', (req, res) => {
  db.query('SELECT * FROM customer', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching customers' });
    }
    res.json(results);
  });
});

app.post('/api/customers', (req, res) => {
  const { customerName, city, phone, emailid } = req.body;
  db.query(
    'INSERT INTO customer (customerName, city, phone, emailid) VALUES (?, ?, ?, ?)',
    [customerName, city, phone, emailid],
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: 'Error adding customer' });
      }
      res.json({ id: results.insertId, customerName, city, phone, emailid });
    }
  );
});

app.put('/api/customers/:id', (req, res) => {
  const { customerName, city, phone, emailid } = req.body;
  db.query(
    'UPDATE customer SET customerName = ?, city = ?, phone = ?, emailid = ? WHERE id = ?',
    [customerName, city, phone, emailid, req.params.id],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating customer' });
      }
      res.json({ message: 'Customer updated successfully' });
    }
  );
});

app.delete('/api/customers/:id', (req, res) => {
  db.query('DELETE FROM customer WHERE id = ?', [req.params.id], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting customer' });
    }
    res.json({ message: 'Customer deleted successfully' });
  });
});

app.get('/api/customers/:id', (req, res) => {
  db.query('SELECT * FROM customer WHERE id = ?', [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching customer' });
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
