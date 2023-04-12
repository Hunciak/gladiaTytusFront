import React from "react";
import { NavLink, Route, Routes} from "react-router-dom";
import "./Navbar.css";
import {Header} from "./Header";
import {SignIn} from "../SignIn/SignIn";
import {SignUp} from "../SignUp/SignUp";




export const Navbar = () => {

    const navBar = (
        <>
            <div className="navbar">
                <h1>Navbar</h1>
                <ul>
                    <li>
                        <NavLink to='/home'>Strona głowna</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin/*'>Zaloguj się</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Rejstracja</NavLink>
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
                <Route path='/signin/*' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/contact' element={<Header/>}/>
            </Routes>

        </h1>
    )
}