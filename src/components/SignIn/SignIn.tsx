import React, {SyntheticEvent, useState} from "react";


export const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });


    const signIn = async (e: SyntheticEvent) => {
        e.preventDefault();

    };

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };


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
                <button>LEo</button>

        </form>
    )
}