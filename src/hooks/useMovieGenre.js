import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieGenre = () => {
   return api.get(`/genre/movie/list`);
};

export const useMovieGenreQuery = () => {
   return useQuery({
      queryKey: ['movie-genre'],
      queryFn: fetchMovieGenre,
      select: result => result.data.genres,
      staleTime: 300000, // 자주 불러올 호출하지 않아도 되기 때문에 staleTime을 설정하여 캐시를 들고옴(5분)
   });
};
