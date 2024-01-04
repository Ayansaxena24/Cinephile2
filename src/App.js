import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MovieList from './components/movielist/MovieList';
import Movie from './pages/moviedetail/Movie';
import Movie2 from './pages/moviedetail/Movie2';
import MyReviews from './pages/myreviews/myreviews';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='mb-10'>
        <Header />
        </div>
        <Routes>
          <Route path='/IMDB-Clone' index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movie2/:id" element={<Movie2 />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
          <Route path="/movies/Reviews" element={<MyReviews/> } >My Reviews</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;