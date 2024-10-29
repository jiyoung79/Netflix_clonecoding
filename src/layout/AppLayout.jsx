import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const AppLayout = () => {
   const [keyword, setKeyWord] = useState('');
   const navigate = useNavigate();

   const searchByKeyword = event => {
      event.preventDefault();
      navigate(`/movies?q=${keyword}`);
      setKeyWord('');
   };

   return (
      <div className='home_body'>
         <Navbar expand='lg' style={{ backgroundColor: '#000000', height: '90px' }} variant='dark'>
            <Container fluid className='navbar'>
               <Navbar.Brand as={Link} to='/'>
                  <img
                     className='logo'
                     src='https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg'
                     alt='Logo'
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='navbarScroll' />
               <Navbar.Collapse id='navbarScroll'>
                  <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                     <Link to='/' className='nav-link' style={{ color: 'white', fontSize: '17px' }}>
                        Home
                     </Link>
                     <Link to='/movies' className='nav-link' style={{ color: 'white', fontSize: '17px' }}>
                        Movies
                     </Link>
                  </Nav>
                  <Form className='d-flex' onSubmit={searchByKeyword}>
                     <Form.Control
                        type='search'
                        placeholder='Search'
                        className='me-2'
                        aria-label='Search'
                        value={keyword}
                        onChange={event => setKeyWord(event.target.value)}
                     />
                     <Button variant='outline-danger' type='submit'>
                        Search
                     </Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Outlet />
      </div>
   );
};

export default AppLayout;
