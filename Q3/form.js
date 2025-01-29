import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/form', (_, res) => {
    res.send(`
        <form action="/submit" method="post">
            <label for="productId">Product ID:</label>
            <input type="text" id="productId" name="productId" required><br><br>
            <label for="productName">Product Name:</label>
            <input type="text" id="productName" name="productName" required><br><br>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

// Handle form submission at /submit route
app.post('/submit', (req, res) => {
    const { productId, productName, description } = req.body;
    console.log(`Product ID: ${productId}`);
    console.log(`Product Name: ${productName}`);
    console.log(`Description: ${description}`);
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});