import {SyntheticEvent, useEffect, useState} from "react";
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
    const [equipment, setEquipment] = useState([{
        name: '',
        type: '',
        tier: 0,
        stats_attack: 0,
        stats_defence: 0,
        stats_strength: 0,
        stats_stamina: 0,
        stats_dexterity: 0,
        stats_charisma: 0,
    }])


    useEffect(() => {
        setLoading(true)

        try {

            (async () => {
            const res = await fetch (`http://localhost:3001/app/user/${props.signIn}`)
            const userStats = await res.json();
            console.log(userStats)
            setStats(stats => ({
                ...stats,
                ...userStats,
            }))
            })()

        } catch (error) {

            console.log('błąd w pobieraniu danych użytkownika', error)

        } finally {
            setLoading(false)

        }
    },[]);

    useEffect(() => {

        try {
            (async () => {
                const res = await fetch(`http://localhost:3001/app/user/eq/${props.signIn}`)
                const usersEquipment = await res.json();
                console.log('itemsy uzytkownika:',usersEquipment)
                setEquipment(equipment => ({
                    ...equipment,
                    ...usersEquipment,
                }))
            })()
        } catch(error) {
            console.log('błąd w pobieraniu ekwipunku', error)
        }
    },[])

    const usersEquipment = (async (e:SyntheticEvent) => {

        e.preventDefault();
        setLoading(true)

        try {
            console.log('pobieram dane do eq')
            const res = await fetch(`http://localhost:3001/app/user/eq`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(equipment)
            });

        } catch (error) {
            console.log('błąd w aktualizacji ekwipunku', error)
        } finally {
            setLoading(false)
        }

    });

    return (
        <div>

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



            {/*<h1>Twój ekwipunek</h1>*/}
            {/*<p>*/}
            {/*    <form action="">*/}
            {/*    <select value={equipment} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <select value={equipment.chest} onSubmit={usersEquipment} defaultValue='none'>*/}
            {/*        {*/}
            {/*            'cipa'*/}
            {/*        }*/}
            {/*    </select>*/}
            {/*    <Btn text={'Zapisz ekwipunek'}/>*/}
            {/*    </form>*/}
            {/*</p>*/}
        </div>
    )
}