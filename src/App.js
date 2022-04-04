import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MealDetail from './components/MealDetail/MealDetail';
import Meals from './components/Meals/Meals';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Meals></Meals>}></Route>
        <Route path="/meals" element={<Meals></Meals>}></Route>
        <Route path="/meal/:mealId" element={<MealDetail></MealDetail>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
