import type { Comic } from '../types/comic';

const COMICS_STORAGE_KEY = 'comixvolt:comics';

function getStoredComics(): Comic[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedComics = window.localStorage.getItem(COMICS_STORAGE_KEY);

    if (!storedComics) {
      return [];
    }

    const parsedComics = JSON.parse(storedComics);
    return Array.isArray(parsedComics) ? parsedComics : [];
  } catch {
    return [];
  }
}

function saveComic(comic: Comic): Comic[] {
  const storedComics = getStoredComics();
  const nextComics = [comic, ...storedComics];
  window.localStorage.setItem(COMICS_STORAGE_KEY, JSON.stringify(nextComics));
  return nextComics;
}

export { COMICS_STORAGE_KEY, getStoredComics, saveComic };