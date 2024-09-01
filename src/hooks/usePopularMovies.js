import { useQuery } from '@tanstack/react-query';
import api from '../utils/api'; // axios 호출에 쓰임

const fetchPopularMovies = () => {
   return api.get(`/movie/popular`);
};

// hook을 만드는 이유 : 코드의 재사용, 컴포넌트를 비즈니스 로직과 ui를 분류해주는 것이 좋음(코드의 세분화)
export const usePopularMoviesQuery = () => {
   return useQuery({
      queryKey: ['movie-popular'],
      queryFn: fetchPopularMovies,
      select: result => result.data,
   });
};
