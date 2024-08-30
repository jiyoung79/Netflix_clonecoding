import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.style.css'

const NotFoundPage = () => {
   return (
      <div className='not-found-container'>
         <h1 className='message'>404 - Page Not Found</h1>
         <p className='p'>Sorry, the page you are looking for does not exist.</p>
         <Link to='/' className='link'>
            Go back to Home
         </Link>
      </div>
   );
};

export default NotFoundPage;
