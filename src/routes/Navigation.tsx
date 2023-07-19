<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { routes } from './routes';
import { Suspense } from 'react';


export const Navigation = () => {

  
    return (
        <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                      {
                       
                        routes.map(({to, path, name})=>(
                            <li key={path}>
                            <NavLink  to={to} 
                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                        </li>
                        ))
                      }
                       
                    </ul>
                </nav>


                <Routes>
                    
                    {
                        routes.map(route=>( 
                            <Route key={route.path} path={route.path} element={ < route.Component /> } />
                        ))
                    }
                    
                    <Route  path="/*" element={ <Navigate to="/lazy" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
        </Suspense>
    )
}
=======
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
    <Suspense fallback={ <span>Loading...</span> }>
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
            
              {
                routes.map( ({ path, name }) => (
                  <li key={ path }>
                    <NavLink 
                      to={ path }
                      activeClassName="nav-active">
                        { name }
                      </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
              
              {
                routes.map( ({ path, component:Component }) => (
                  <Route 
                    key={ path }
                    path={ path }
                    render={ () => <Component /> }
                  />
                ))
              }

              <Redirect to={ routes[0].path } />
          
          </Switch>
        </div>
      </Router>

    </Suspense>
  );
}
>>>>>>> 974413b64e35c00c615f3e5e800f29cbedc10a4c
