import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import Header from '../src/components/Header/Header';
import MainCategoryItems from '../src/components/MainCategory/MainCategoryItems';
import MainRecipe from '../src/components/Recipe/MainRepice';
import PopularCoffe from '../src/components/PopularCoffee/PopularCoffee';
import PopularRecipe from '../src/components/PopularRecipe/PopularRecipe';
import Blog from '../src/components/Blog/Blog';
import MainText from '../src/components/MainText/MainText';
import Footer from '../src/components/Footer/Footer';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <>
      <Router>
      <NavBar />
      <Header />
      <MainCategoryItems />
      <MainRecipe />
      <PopularCoffe />
      <PopularRecipe />
      <Blog />
      <MainText />
      <Footer />
      <Switch></Switch>
       
      </Router>
      
    </>
  );
}

export default App;
