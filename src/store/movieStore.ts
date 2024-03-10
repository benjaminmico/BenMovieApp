import type { Movie } from 'types';
import { zustandMMKVStorage } from 'utils';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

type MoviesState = {
  movies: Movie[];
};

type MoviesActions = {
  setMovies: (movies: Movie[]) => void;
  reset: () => void;
};

const initialState: MoviesState = {
  movies: [],
};

const useMovieStore = create<MoviesState & MoviesActions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        movies: [],
        setMovies: (movies) => set(() => ({ movies })),
        reset: () => {
          set(initialState);
        },
      }),
      {
        name: 'movies-storage',
        // persist
        storage: createJSONStorage(() => zustandMMKVStorage),
      },
    ),
  ),
);

export default useMovieStore;
