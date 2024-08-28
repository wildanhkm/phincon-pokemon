import express from 'express';
import pokemonRoutes from './routes/pokemon';

const app = express();

app.use(express.json());
app.use('/api/pokemon', pokemonRoutes);

export default app;
