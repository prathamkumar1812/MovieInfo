import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Home from './components/Home';
import Upcoming from './components/Upcoming';
import { Provider } from 'react-redux';
import {store} from './Redux/store.js';
import Details from './components/Details.jsx';
import NowPlaying from './components/NowPlaying.jsx';
import Search from './components/Search.jsx';


const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}></Route>
    <Route path='upcoming' element={<Upcoming/>}/>  
    <Route path='playing' element={<NowPlaying/>}/>  
    <Route path='details/:id' element={<Details/>}/> 
    <Route path='search/:search' element={<Search/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(

    <NextUIProvider>
      <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </NextUIProvider>
)
