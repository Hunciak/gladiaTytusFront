import React, {SyntheticEvent, useState} from "react";
import {Btn} from "../common/Btn";


export const SignIn = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
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
            const data = await res.json();
            setSuccess(data)
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

    if (success) {
        return <h2>Pomyślnie zalogowano.</h2>
    }

    return (
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
    )
}