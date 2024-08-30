import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/HomePage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import axios from 'axios';

// 홈페이지 (/)
// 영화 전체를 보여주는 페이지(검색도 가능) (/movie)
// 영화 디테일 페이지 (/movies/:id)
// 추천영화 (/movies/:id/recommandation)
// 리뷰 (/movies/:id/reviews)
function App() {
   return (
      <Routes>
         <Route path='/' element={<AppLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/movies'>
               <Route index element={<MoviePage />} />
               <Route path=':id' element={<MovieDetailPage />} />
         </Route>
         {/* Route도 묶어줄 수 있음. 아래는 위와 같은 의미의 코드임 */}
            {/* <Route path='/movies' element={<MoviePage />} />
            <Route path='/movies:id' element={<MovieDetailPage />} /> */}
       </Route>
       <Route path='*' element={<NotFoundPage />}/>
      </Routes>
   );
}


export default App;
