import { z } from 'zod';

export const statusEnum = z.enum(['read', 'unread', 'reading later']);

export const insertcomicSchema = z.object({
  title: z.string(),
  issueNumber: z.number(),
  publisher: z.string(),
  status: statusEnum,
  coverImage: z.string().optional(),
  releaseDate: z.string().optional(),
  rating : z.number().optional(),
  notes: z.string().optional(),
  createdAt : z.string().optional(),
});

export type InsertComicInput = z.infer<typeof insertcomicSchema>;

export type Comic = {
  id: number;
  title: string;
  issueNumber: number;
  publisher: string;
  status: 'read' | 'unread' | 'reading later';
  coverImage?: string;
  releaseDate?: string;
  rating?: number;
  notes?: string;
  createdAt: string;
};

