import { useQuery } from '@tanstack/react-query';
import api from '../utils/api'; // axios 호출에 쓰임

const fetchUpcomingMovies = () => {
   return api.get(`/movie/upcoming`);
};

// hook을 만드는 이유 : 코드의 재사용, 컴포넌트를 비즈니스 로직과 ui를 분류해주는 것이 좋음(코드의 세분화)
export const useUpcomingMoviesQuery = () => {
   return useQuery({
      queryKey: ['movie-upcoming'],
      queryFn: fetchUpcomingMovies,
      select: result => result.data,
   });
};
