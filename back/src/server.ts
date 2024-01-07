import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});