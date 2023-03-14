import React, { useState } from "react";


export const SignUp = () => {


        const [form, setForm] = useState({
            id: '',
            email: '',
            name: '',
            password: '',
            repPassword: '',
        });

    function saveUser() {

    }

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };

    return (
        <form className='sign-up' action='' onSubmit={saveUser}>
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
                    Hasło: <br/>
                    <input
                        type="password"
                        name="repPassword"
                        required
                        maxLength={30}
                        value={form.repPassword}
                        onChange={e => updateForm('repPassword', e.target.value)}
                    />
                </label>

            </p>
            <button>LEo</button>
        </form>
    )
}