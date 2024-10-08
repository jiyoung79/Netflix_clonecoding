import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import UpcomingMovie from './components/UpcomingMovie/UpcomingMovie';


// 1. 배너 => popular 영화를 가져와서 첫번째 아이템을 보여주기(api 호출)
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
   return (
      <div>
           <Banner />
           <PopularMovieSlide />
           <UpcomingMovie />
      </div>
   );
};

export default Homepage;
