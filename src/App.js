import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './Styles/Css/App.min.css';
import Aparat from './Pages/Others/Aparat'
import Users from './Pages/Users/Users';
import Todo from './Pages/Todo/Todo';
import About from './Pages/Others/About';
import Contact from './Pages/Others/Contact';
<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Route component={Aparat} path="/" exact />
          <Route component={Users} path="/Users" exact />
          <Route component={Todo} path="/Todo" exact />
          <Route component={About} path="/About" exact />
          <Route component={Contact} path="/Contact" exact />
        </BrowserRouter>
      </>
    );
  }
}
export default App;