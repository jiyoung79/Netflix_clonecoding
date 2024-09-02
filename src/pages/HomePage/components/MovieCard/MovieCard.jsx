import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { faUsers, faStar, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const genreMap = {
   28: 'Action',
   12: 'Adventure',
   16: 'Animation',
   35: 'Comedy',
   80: 'Crime',
   99: 'Documentary',
   18: 'Drama',
   10751: 'Family',
   14: 'Fantasy',
   36: 'History',
   27: 'Horror',
   10402: 'Music',
   9648: 'Mystery',
   10749: 'Romance',
   878: 'Science Fiction',
   10770: 'TV Movie',
   53: 'Thriller',
   10752: 'War',
   37: 'Western',
};

const MovieCard = ({ movie }) => {
   return (
      <div
         style={{
            backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w1066_and_h600_bestv2${movie.poster_path}` + ')',
         }}
         className='movie_card'>
         <div className='overlay'>
            <h1 className='title'>{movie.title}</h1>
            {movie.genre_ids.map(id => (
                <Badge bg='danger' key={id} className='genre'>
                  {genreMap[id]}
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

export default MovieCard;
