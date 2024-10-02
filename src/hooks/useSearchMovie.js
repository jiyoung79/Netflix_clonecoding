import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchSearchMovie = ({ keyword, page = 1 }) => {
   return keyword ? api.get(`/search/movie?query=${keyword}&page=${page}`) : api.get(`/movie/popular?page=${page}`);
};

export const useSearchMovieQuery = ({ keyword, page }) => {
   return useQuery({
      // keyword에 따라서 url이 달라지기 때문에 keyword 별 유니크한 queryKey를 만들어야한다.
      queryKey: ['movie-search', (keyword, page)],
      queryFn: () => fetchSearchMovie({ keyword, page }),
      select: result => result.data,
   });
};
