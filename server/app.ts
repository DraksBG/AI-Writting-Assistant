// Load environment variables first
import dotenv from 'dotenv';
dotenv.config();

import express, { Express } from 'express';
import cors from 'cors';

import analyzeRoute from './routes/analyze';
import grammarCheckRoute from './routes/grammarCheck';
import spellCheckRoute from './routes/spellCheck';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '8000', 10);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/analyze', analyzeRoute);
app.use('/api/grammarcheck', grammarCheckRoute);
app.use('/api/spellcheck', spellCheckRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;