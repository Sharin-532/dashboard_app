
import { useState } from "react";
import React from 'react';
import titleImage from './assets/control.png';
import todoIcon from './assets/todos.png';
import weatherIcon from './assets/weather.png';
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";
import Weather from './Components/Weather';

import TodoList from './Components/TodoList';




const App = () => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setIndex] = useState(0);
  const AppTitle = () => (
    <div className="ml-5"  > 
          <h1 className="text-lg text-white font-semibold ">Dashboard</h1>
        </div>
  );

  const Menus = [
    { title: "Weather", src: "Weather", link: "/",icon:weatherIcon },
    { title: "TodoList", src: "TodoList", link: "/TodoList",icon:todoIcon },
   
  ];
  

  return (
  
    <div className="flex w-full">
      <Router>
      <div
        className={` ${
          open ? "w-56" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}>
          <div className="flex">
        <img
          src={titleImage} className="h-8"
          onClick={() => setOpen(!open)}/>
          { open ? <AppTitle /> : null }
          </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li 
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === selectedIndex && "bg-light-white"
              } `}
            > <Link to={Menu.link} onClick={()=>
              setIndex(index)

            } >
              <div className="flex">
              <img src={Menu.icon} className="w-7 mr-4 bg-white" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <Routes>
        <Route path="/" element={<Weather />} />

        <Route path="/Weather" element={<Weather/>} />

        <Route path="/TodoList" element={<TodoList/>} />
       
      </Routes>
    </Router>
    </div>

  );
};
export default App;
















