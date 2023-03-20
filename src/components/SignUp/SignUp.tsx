import React, {SyntheticEvent, useState} from "react";
import {Btn} from "../common/Btn";



export const SignUp = () => {

        const [id, setId] = useState('');
        const [loading, setLoading] = useState(false);
        const [form, setForm] = useState({
            email: '',
            name: '',
            password: '',
        });
        const [repPass, setRepPass] = useState({
            validPass: '',
        });


    const saveUser = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true)

        const wrapForm = {
            email: form.email,
            name: form.name,
            password: form.password,
        };

        if (!repPass || repPass.validPass !== form.password) {
            throw new Error('Hasła nie są takie same lub należy wypełnić powtórzenie hasła!');
        }

        try{
            const res = await fetch(`http://localhost:3001/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(wrapForm),
            })

            const data = await res.json();
            console.log(data)
            setId(data.id)

        } catch (error) {
            console.log('jebany blad',error)
        }
        finally {
            setLoading(false);
        }
    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
        setRepPass(repPass => ({
            ...repPass,
            [key]: value,
        }))
    };

    if (loading) {
        return <h2>Trwa rejestracja. </h2>
    }

    if (id) {
        return <h2>Pomyślnie zarejestrowano.</h2>
    }

    return (
        <form className='sign-up' action='' onSubmit={saveUser}>
            <h1>Zarejestruj się</h1>
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
                    Nazwa postaci: <br/>
                    <input
                        type="text"
                        name="name"
                        required
                        maxLength={30}
                        value={form.name}
                        onChange={e => updateForm('name', e.target.value)}/>
                </label>

                <label>
                    Hasło: <br/>
                    <input
                        type="password"
                        name="password"
                        required
                        maxLength={30}
                        value={form.password}
                        onChange={e => updateForm('password', e.target.value)}
                    />
                </label>

                <label>
                    Powtórz hasło: <br/>
                    <input
                        type="password"
                        name="repPass"
                        required
                        maxLength={30}
                        value={repPass.validPass}
                        onChange={e => updateForm('validPass', e.target.value)}
                    />
                </label>

            </p>
            <Btn text={'Zarejstruj'}/>
        </form>
    )
}