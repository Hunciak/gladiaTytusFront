import {SyntheticEvent, useState} from "react";
import {Btn} from "../common/Btn";

interface Props {
    id:string;
}

export const GetOneUser = (props: Props) => {
    const [loading, setLoading] = useState(false)
    const [stats, setStats] = useState({
        name: '',
        HP: 0,
        damage: 0,
        chanceOnHit: 0,
        damageReduction: 0,
        strength: 0,
        dexterity: 0,
        stamina: 0,
        charisma: 0,
        PLN: 0,
    });

    const viewUser = (async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true)

        try {
            console.log(props.id)
            const res = await fetch (`http://localhost:3001/app/user/${props.id}`)
            const userStats = await res.json();
            console.log(userStats)
        } catch (error) {

            console.log('błąd w pobieraniu danych użytkownika', error)

        }finally {
            setLoading(false)
        }
    })

    return (
        <div>
            <form action="" onSubmit={viewUser}>
            <h1>Twoje statystyki</h1>
                <p>
                    <label>
                        Nazwa:
                        <input
                            type="text"
                            name="name"
                            readOnly
                            value={stats.name}
                        />
                    </label>

                    <label>
                        HP:
                        <input
                            type="text"
                               name="HP"
                                readOnly
                               value={stats.HP}
                        />
                    </label>
                    <label>
                        Obrażenia:
                        <input
                            type="text"
                            name="damage"
                            readOnly
                            value={stats.damage}
                        />
                    </label>
                    <label>
                        Szansa na trafienie:
                        <input
                            type="number"
                            name="chanceOnHit"
                            readOnly
                            value={stats.chanceOnHit}
                        />
                    </label>
                    <label>
                        Redukcja obrażeń:
                        <input
                            type="number"
                            name="damageReduction"
                            readOnly
                            value={stats.dexterity}
                        />
                    </label>

                    <label>
                        Siła:
                        <input
                            type="number"
                            name="strength"
                            readOnly
                            value={stats.strength}
                        />
                    </label>

                    <label>
                        Zręczność:
                        <input
                            type="number"
                            name="dexterity"
                            readOnly
                            value={stats.dexterity}
                        />
                    </label>

                    <label>
                        Wytrzymałość:
                        <input
                            type="number"
                            name="stamina"
                            readOnly
                            value={stats.stamina}
                        />
                    </label>

                    <label>
                        Charyzma:
                        <input
                            type="number"
                            name="charisma"
                            readOnly
                            value={stats.charisma}
                        />
                    </label>

                    <label>
                        PLN:
                        <input
                            type="number"
                            name="PLN"
                            readOnly
                            value={stats.PLN}
                        />
                    </label>
                </p>
            <Btn text={'Odśwież dane'}/>
            </form>
        </div>
    )

}