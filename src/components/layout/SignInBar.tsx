import React, {useState} from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import {GetOneUser} from "../GetOneUser/GetOneUser";
import {GetAllOpponents} from "../GetAllOpponents/GetAllOpponents";
import {GetUserEq} from "../GetUserEq/GetUserEq";
import {AddStatistics} from "../AddStatistics/AddStatistics";



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
                    <NavLink to='/signin/eq'>Pokaz ekwipunek</NavLink>
                </li>
            </ul>
        </div>
    )
    return(
        <h3>
            {signInBar}
            <Routes>
                <Route path='/user' element={GetOneUser(props.id)}></Route>
                <Route path='/fight' element={GetAllOpponents(props.id)}></Route>
                <Route path='/stats' element={AddStatistics(props.id)}></Route>
                <Route path='/eq' element={GetUserEq(props.id)}></Route>
            </Routes>
        </h3>
    )
}