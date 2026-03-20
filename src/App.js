import React, { Suspense } from 'react';
import './App.css';
import logo from './logo.png'

import Login from './pages/Login';
import Header from './services/components/Header';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import ErrorPage from './pages/Error';

import { UserContextProvider } from './context/UserContext';
import { GifsContextProvider } from './context/GifsContext';
import { Link, Route } from "wouter";

const HomePage = React.lazy(() => import('./pages/home'))

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
              <figure className="App-logo">
                <img alt='Giffy logo' src={logo} />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path="/"
              />
              <Route
                component={SearchResults}
                path="/search/:keyword/:rating?" />
              <Route
                component={Detail}
                path="/gif/:id"
              />
              <Route
                component={Login}
                path="/login"
              />
              <Route
                component={ErrorPage}
                path="/:rest*"
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
