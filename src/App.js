//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import CustomerList from './pages/CustomerList';

class App extends Component {
  render(){ 
    const { classes } = this.props;
    return (
      <div>
        <Route path="/" component={CustomerList} exact={true}/>
        <Route path="/productlist" component={ProductList} />
        <Route path="/customerlist" component={CustomerList} />
      </div>
    );
  }
}

export default App;
