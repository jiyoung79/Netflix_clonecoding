import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { faUsers, faStar, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';

const UpcomingMovieCard = ({ movie }) => {
   const { data: genreData } = useMovieGenreQuery();
   // console.log(genreData);

   // genreIdList를 매개변수로 받아옴
   const showGenre = genreIdList => {
      if (!genreData) return [];
      const genreNameList = genreIdList.map(id => {
         const genreObj = genreData.find(genre => genre.id === id);
         return genreObj.name;
      });

      return genreNameList;
   };
   return (
      <div
         style={{
            backgroundImage: 'url(' + `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}` + ')',
         }}
         className='movie_card'>
         <div className='overlay'>
            <h1 className='title'>{movie.title}</h1>
            {showGenre(movie.genre_ids).map((genre, index) => (
               <Badge bg='danger' key={index} className='genre'>
                  {genre}
               </Badge>
            ))}
            <div className='movie_info'>
               <div>
                  <FontAwesomeIcon icon={faStar} className='star_icon' />
                  {movie?.vote_average}
               </div>
               <div>
                  <FontAwesomeIcon icon={faUsers} className='user_icon' />
                  {movie?.popularity}
               </div>
               <div>
                  {movie?.adult ? (
                     <FontAwesomeIcon icon={faEyeSlash} className='eye_slash' />
                  ) : (
                     <FontAwesomeIcon icon={faEye} className='eye' />
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default UpcomingMovieCard;
