import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import PageNotFound from './views/PageNotFound';
import { Container } from 'react-bootstrap';
import './App.css';


function App() {

  return (
    <BrowserRouter>

      <Container className="App">

        <Switch>

          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />

        </Switch>

      </Container>

    </BrowserRouter>
  );
}

export default App;
