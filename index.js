import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// format for sending and requesting data throught a Rest API
app.use(bodyParser.json());

app.use('/users', userRoutes);

app.get('/', (req, res) => res.send('Hello from Home Page'));

app.listen(PORT, () => console.log(`Server running on Port: http://localhost:${PORT}`));
