import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';

const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
   },
   tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
   },
   mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
   },
};

const PopularMovieSlide = () => {
   const { data, isLoading, isError, error } = usePopularMoviesQuery();

   if (isLoading) {
      return <h1>Loading...</h1>; // 로딩 상태 처리
   }

   if (isError) {
      return <Alert variant='danger'>{error.message}</Alert>; // 에러 상태 처리
   }

   // data 및 data.results가 존재하는지 확인
   if (!data || !data.results || data.results.length === 0) {
      return <p>No popular movies found.</p>; // 데이터가 없을 때 처리
   }

   return (
      <div>
         <h3>Top Popular Movies</h3>
         <Carousel
            infinite={true}
            centerMode={true}
            itemClass='movie-slider p-1'
            containerClass='carousel-container'
            responsive={responsive}>
            {data.results.map((movie, index) => (
               <MovieCard movie={movie} key={index} />
            ))}
         </Carousel>
      </div>
   );
};

export default PopularMovieSlide;
