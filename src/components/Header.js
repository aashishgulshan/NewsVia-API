import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import News from "./News";
import Home from "./Home"; 



export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <header className="p-2 text-white bg-violet-700">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <Link className="flex title-font font-medium items-center md:mb-0" to="/" target={'_self'}>
                    <span className="ml-2 text-3xl text-white">NewsVia API</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center justify-center gap-3 text-l">
                <Link to="/general" className=" hover:scale-105 duration-[400ms]">General</Link> 
                <Link to="/business" className=" hover:scale-105 duration-[400ms]">Business</Link> 
                <Link to="/technology" className=" hover:scale-105 duration-[400ms]">Tech</Link> 
                <Link to="/sports" className=" hover:scale-105 duration-[400ms]">Sports</Link> 
                <Link to="/health" className=" hover:scale-105 duration-[400ms]">Health</Link>
                <Link to="/science" className=" hover:scale-105 duration-[400ms]">Science</Link> 
                <Link to="/entertainment" className=" hover:scale-105 duration-[400ms]">Entertainment</Link> 

                </nav>
            </div>
        </header>

        <Home/>

        <Routes>
            <Route exact path='/' element={<News/>}></Route>
            <Route exact path='/general' element={<News cat="general"/>}></Route>
            <Route exact path='/business' element={<News cat="business"/>}></Route>
            <Route exact path='/technology' element={<News cat="technology"/>}></Route>
            <Route exact path='/sports' element={<News cat="sports"/>}></Route>
            <Route exact path='/health' element={<News cat="health"/>}></Route>
            <Route exact path='/science' element={<News cat="science"/>}></Route>
            <Route exact path='/entertainment' element={<News cat="entertainment"/>}></Route>
            {/* <Route  path='/*' element={<Error/>}></Route>             */}

        </Routes>

      </Router>
    )
  }
}