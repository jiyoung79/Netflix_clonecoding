import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, useNavigate } from 'react-router-dom'; // 라우터 안에 있는 자손들을 가져옴

const AppLayout = () => {
   const [keyword, setKeyWord] = useState('');
   const navigate = useNavigate();

   const searchByKeyword = event => {
      // refresh를 막는다
      event.preventDefault();
      // url을 바꿔주기
      navigate(`/movies?q=${keyword}`);
      setKeyWord('');
   };
   return (
      <div className='home_body'>
         <Navbar expand='lg' style={{ backgroundColor: '#000000', height: '90px' }} variant='dark'>
            <Container fluid className='navbar'>
               <Navbar.Brand href='/'>
                  <img
                     className='logo'
                     src='https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg'
                  />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls='navbarScroll' />
               <Navbar.Collapse id='navbarScroll'>
                  <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
                     <Nav.Link href='/' style={{ color: 'white', fontSize: '17px' }}>
                        Home
                     </Nav.Link>
                     <Nav.Link href='/movies' style={{ color: 'white', fontSize: '17px' }}>
                        Movies
                     </Nav.Link>
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
