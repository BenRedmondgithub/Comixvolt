import express from 'express';
import { z } from 'zod';

const app = express();
const PORT = 3000;

const comicSchema = z.object({
  title: z.string().trim().min(1),
  author: z.string().trim().min(1),
  publisher: z.string().trim().min(1),
  releaseDate: z.string().trim().min(1),
  coverImage: z.string().trim().url().optional().or(z.literal('')),
  rating: z.number().int().min(1).max(5),
  description: z.string().trim().min(1),
  status: z.enum(['unread', 'reading', 'completed']),
  notes: 
});

const comics: Array<z.infer<typeof comicSchema> & { id: number; createdAt: string }> = [];

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204);
    return;
  }

  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Comixvolt API is running.' });
});

app.get('/api/comics', (_req, res) => {
  res.json(comics);
});

app.post('/api/comics', (req, res) => {
  const parsedComic = comicSchema.safeParse({
    ...req.body,
    rating: Number(req.body?.rating),
  });

  if (!parsedComic.success) {
    res.status(400).json({
      message: 'Invalid comic payload.',
      issues: parsedComic.error.flatten(),
    });
    return;
  }

  const newComic = {
    id: comics.length + 1,
    createdAt: new Date().toISOString(),
    ...parsedComic.data,
  };

  comics.push(newComic);
  res.status(201).json(newComic);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});