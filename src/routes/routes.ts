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
   
]