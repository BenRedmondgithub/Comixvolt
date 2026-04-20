type Comic = {
  title: string;
  author: string;
  publisher: string;
  releaseDate: string;
  coverImage?: string;
  rating: number;
  description?: string;
    // notes?: string[]; // Optional array of notes for the comic
};

export type { Comic };