import {SyntheticEvent, useState} from "react";
import {Btn} from "../common/Btn";



interface Props {
    signIn: string;
}

export const GetOneUser = (props: Props) => {
    const [loading, setLoading] = useState(false)
    const [stats, setStats] = useState({
        name: '',
        level: 0,
        experience: 0,
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

            const res = await fetch (`http://localhost:3001/app/user/${props.signIn}`)
            const userStats = await res.json();
            console.log(userStats)
            setStats(stats => ({
                ...stats,
                ...userStats,
            }))
            console.log('staty:', stats)
        } catch (error) {

            console.log('błąd w pobieraniu danych użytkownika', error)

        }finally {
            setLoading(false)
            console.log()
        }
    })


    return (
        <div>
            <form action="" onSubmit={viewUser}>
            <h1>Twoje statystyki</h1>
                    <ul>
                        <li>Nazwa: {stats.name}</li>
                        <li>Level: {stats.level}</li>
                        <li>Doświadczenie: {stats.experience}</li>
                        <li>HP: {stats.HP}</li>
                        <li>Obrażenia: {stats.damage}</li>
                        <li>Szansa na trafienie: {stats.chanceOnHit}</li>
                        <li>Redukcja obrażeń: {stats.damageReduction}</li>
                        <li>Siła: {stats.strength}</li>
                        <li>Zręczność: {stats.dexterity}</li>
                        <li>Charyzma: {stats.charisma}</li>
                        <li>PLN: {stats.PLN}</li>
                    </ul>

            <Btn text={'Odśwież dane'}/>
            </form>
        </div>
    )

}