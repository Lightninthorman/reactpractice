import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header.js'
import HomeGuest from './components/HomeGuest.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Terms from './components/Terms.js'

function App() {
  return (
    <BrowserRouter>
        <Header />

        <Switch>
            <Route path="/" exact>
                <HomeGuest />
            </Route>
            <Route path="/about-us">
                <About />
            </Route>
            <Route path="/terms" exact>
                <Terms />
            </Route>
        </Switch>

        <Footer />




    </BrowserRouter>
  );
}

export default App;
