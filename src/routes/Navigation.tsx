
import { Suspense } from 'react';

import { Routes, Route, NavLink, Navigate, BrowserRouter } from 'react-router-dom';

import logo from '../logo.svg'
import { routes } from './routes';


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
