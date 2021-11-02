import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import PaymentMade from './components/PaymentMade';
import Login from './components/Login';



function App() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={ProductList}/> 
          <Route path="/details" component={Details}/>
          <Route path="/paymentsuccessful" component={PaymentMade}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/productlist" component={ProductList}/>
          <Route path="/login" component={Login}/>


        
          <Route component={Default}/>
        
        </Switch>


    </React.Fragment>
    
  );
}

export default App;
