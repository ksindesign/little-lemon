import './App.css';
import React from 'react';
import Nav from './Layouts/Nav/Nav';
import Header from './Layouts/Header/Header';
import Main from './Layouts/Main/Main';
import Footer from './Layouts/Footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const brand = {
  name: 'Little Lemon',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, cum eaque. Sed, obcaecati velit. Aperiam vitae voluptatem necessitatibus commodi nobis, harum fugit incidunt ratione! Beatae non recusandae in similique amet.',
};

function App() {
  return (
    <>
      <Nav></Nav>
      <Header brand={brand} name={brand.name}></Header>
      <Main></Main>
      <Footer brand={brand} name={brand.name}></Footer>
    </>
  );
}

export default App;
