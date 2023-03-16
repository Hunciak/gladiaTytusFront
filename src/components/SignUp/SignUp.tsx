import React, {SyntheticEvent, useState} from "react";





export const SignUp = () => {

        const [id, setId] = useState('');
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

        if (!repPass || repPass.validPass !== form.password) {
            throw new Error('Hasła nie są takie same lub należy wypełnić powtórzenie hasła!');
        }


        try{
            const res = await fetch(`http://localhost:3001/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            const data = await res.json();
            setId(data.id)
        } catch (error) {
            console.log('jebany blad',error)
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
            <input type="submit"/>
        </form>
    )
}