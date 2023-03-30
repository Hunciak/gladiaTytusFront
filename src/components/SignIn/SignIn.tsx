import React, {SyntheticEvent, useEffect, useState} from "react";
import {Btn} from "../common/Btn";
import {GetOneUser} from "../GetOneUser/GetOneUser";
import {GetOneOpponent} from "../GetOneOpponent/GetOneOpponent";



export const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const signIn = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);
        try{
            const res = await fetch(`http://localhost:3001/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const getId = await res.json();
            console.log(getId.signIn)
            setId(getId.signIn);


        } catch (error) {

            console.log('jebany blad',error)
        }
        finally {
            setLoading(false);

        }
    };
    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if (loading) {
        return <h2>Trwa logowanie. </h2>
    }


    if (id) {
        return (
            <div>
        <h2>Pomyślnie zalogowano.</h2>
                <GetOneUser signIn={id}/>
                <GetOneOpponent opponentId='abc'/>
            </div>
        )}

    return (
        <div>
        <form className='sign-in' action="" onSubmit={signIn}>
            <h1>Zaloguj się</h1>
                <p>
                    <label>
                        E-mail: <br/>
                        <input
                            type="text"
                            name="email"
                            required
                            maxLength={30}
                            value={form.email}
                            onChange={e => updateForm('email', e.target.value)}/>
                    </label>

                    <label>
                        Password: <br/>
                        <input
                            type="text"
                            name="password"
                            required
                            maxLength={30}
                            value={form.password}
                            onChange={e => updateForm('password', e.target.value)}
                        />
                    </label>

                </p>
                <Btn text={'Zaloguj się'}/>

        </form>

        </div>
    )
}