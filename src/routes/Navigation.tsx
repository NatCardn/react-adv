import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { LazyPage } from '../01-lazyload/pages/LazyPage';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Lazy 3</NavLink>
                        </li>
                    </ul>
                </nav>


                <Routes>
                    <Route path="lazy" element={ <LazyPage/> } />
                    <Route path="lazy2" element={ <LazyPage2/> } />
                    <Route path="lazy3" element={ <LazyPage3/> } />
                    
                    <Route path="/*" element={ <Navigate to="/lazy" replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
