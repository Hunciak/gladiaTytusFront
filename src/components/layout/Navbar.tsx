import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import "./Navbar.css";
import {Header} from "./Header";



export const Navbar = () => {

    const navBar = (
        <>
            <div className="navbar">
                <h1>Navbar</h1>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>Zaloguj się</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'>O grze</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Kontakt</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )

    return (
        <h1>
            {navBar}
            <Routes>
                <Route path='/home' element={<Header/>}/>
                <Route path='/signIn' element={<Header/>}/>
                <Route path='/about' element={<Header/>}/>
                <Route path='/contact' element={<Header/>}/>
            </Routes>

        </h1>
    )
}