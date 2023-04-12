import React, {SyntheticEvent, useEffect, useState} from "react";
import {AddStatsType, AddStatsValidationType} from "types";


export const AddStatistics = (props: string) => {

    const [notEnoughGold, setNotEnoughGold] = useState(false)

    const [stats, setStats] = useState<AddStatsType>({
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

    useEffect(() => {
        try {
            (async () => {
                const res = await fetch(`http://localhost:3001/app/user/${props}`)
                const userStats = await res.json();
                setStats(stats => ({
                    ...stats,
                    ...userStats,
                }))
            })()
        } catch (error) {

            console.log('błąd w pobieraniu danych użytkownika', error)
        }
    }, []);

    const sendStats = async (e: SyntheticEvent) => {
        e.preventDefault();
        const modifiedStats: AddStatsValidationType = {
            id: props,
            strength: stats.strength,
            dexterity: stats.dexterity,
            stamina: stats.stamina,
            charisma: stats.charisma,
            PLN: stats.PLN,
        }
        console.log(modifiedStats)
        try {

            await fetch(`http://localhost:3001/app/addstats`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(modifiedStats)
            })

        } catch (error) {
            console.log('Błąd podczas wysyłania danych na be. Moduł dodawania statystyk', error)
        }

    };

    const addStat = (key: string): void => {
        if (stats.PLN > 3) {
            setStats((stats: any) => ({
                ...stats,
                [key]: stats[key] + 1,
                PLN: stats.PLN - 3,
            }))
        } else {
            setNotEnoughGold(true);
        }
    };

    return <div>
        <h1>Dodaj statystyki</h1>
        <ul>
            <form onClick={(e) => addStat('strength')}>
                <li>Pakuj siłę: {stats.strength}</li>
                <button type='button'>Dodaj</button>
            </form>

            <form onClick={(e) => addStat('dexterity')}>
                <li>Pakuj zręczność: {stats.dexterity}</li>
                <button type='button'>Dodaj</button>
            </form>

            <form onClick={(e) => addStat('stamina')}>
                <li>Pakuj wytrzymałość: {stats.stamina}</li>
                <button type='button'>Dodaj</button>
            </form>

            <form onClick={(e) => addStat('charisma')}>
                <li>Pakuj jak do japy (charyzma): {stats.charisma}</li>
                <button type='button'>Dodaj</button>
            </form>
            <li>PLN: {stats.PLN}</li>
            {notEnoughGold ? (<h2>Nie masz wystarczającej ilości PLN</h2>) : (<h2>Pakuj</h2>)}
        </ul>
        <button onClick={sendStats}>
            Trenuj
        </button>
    </div>
}