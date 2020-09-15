import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignIn, SignUp, Home } from '.';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  );
}

export default App;