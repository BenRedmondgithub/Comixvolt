type Comic = {
  title: string;
  author: string;
  publisher: string;
  releaseDate: string;
  coverImage?: string;
  rating: number;
  description?: string;
  status?: 'read' | 'reading' | 'to-read';
  notes?: string[];
};

export type { Comic };