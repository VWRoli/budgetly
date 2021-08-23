import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ silent: true });

const port = process.env.PORT;
//App init
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the budgetly API!')
});

app.listen(port, () => console.log(`Server is up on port ${port}`))