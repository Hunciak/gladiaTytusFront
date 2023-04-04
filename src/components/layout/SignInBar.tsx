import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {GetOneUser} from "../GetOneUser/GetOneUser";
import {GetAllOpponents} from "../GetAllOpponents/GetAllOpponents";


interface Props {
    id: any;
}

export const SignInBar = (props: Props) => {

    const signInBar = (
        <div>
            <ul>
                <li>
                    <NavLink to='/signin/user'>Twoja postać</NavLink>
                </li>
                <li>
                    <NavLink to='/signin/fight'>Walcz</NavLink>
                </li>
                <li>
                    <NavLink to='/signin/stats'>Dodaj statystyki</NavLink>
                </li>
                <li>
                    <NavLink to='/signin/shop'>Kup ekwipunek</NavLink>
                </li>
            </ul>
        </div>
    )
    return(
        <h3>
            {signInBar}
            <Routes>
                <Route path='/user' element={GetOneUser(props.id)}></Route>
                <Route path='/fight' element={GetAllOpponents()}></Route>
                <Route path='/stats' element={GetOneUser(props.id)}></Route>
                <Route path='/shop' element={GetOneUser(props.id)}></Route>
            </Routes>
        </h3>
    )
}