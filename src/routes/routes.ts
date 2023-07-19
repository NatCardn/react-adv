<<<<<<< HEAD
import { lazy, LazyExoticComponent  } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = ()=>JSX.Element
interface Route {

    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;

}

const lazyLayout = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));


export const routes:Route[] = [
    {
        to: '/lazylayout',
        path: 'lazylayout/*',
        Component:lazyLayout,
        name: 'Lazy-Layout'
    },

    {
        to: '/nolazy',
        path: 'nolazy',
        Component:NoLazy,
        name: 'NOt Lazy'
    },
=======
import { LazyExoticComponent } from 'react';
import { lazy } from 'react'

import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[]
}


export const routes: Route[] = [
    {
        path: '/lazyload',
        component: lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy loading'
    }
>>>>>>> 974413b64e35c00c615f3e5e800f29cbedc10a4c
   
]