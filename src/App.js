import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/sidebar/chat/Chat'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/channel/:channelId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
        {/* Routing */}
      </BrowserRouter>
    </div>
  );
}

export default App;