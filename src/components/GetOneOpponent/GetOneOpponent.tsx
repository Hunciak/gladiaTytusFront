import React, {useEffect, useState} from "react";


interface Props {
    opponentId: string;
}

export const GetOneOpponent = (props: Props) => {
    

    const [stats, setStats] = useState({
        name: '',
        hp: 0,
        tier: 0,
        damage: 0,
        chanceOnHit: 0,
        damageReduction: 0,
        maxGold: 0,
    });

    useEffect( () => {

      try {
          (async () => {
            const res = await fetch(`http://localhost:3001/app/opp/${props.opponentId}`)
            const opponentStats = await res.json();
              console.log(opponentStats)
              setStats(stats => ({
                  ...stats,
                  ...opponentStats,
              }))
          })()
        } catch (error) {
            console.log('coś poszło nieu tak w axios GetOneOpponent', error)
        }
    },[]);

    return (
        <div>
            <h1>Twoje statystyki</h1>
            <ul>
                <li>Nazwa: {stats.name}</li>
                <li>Hp: {stats.hp}</li>
                <li>tier: {stats.tier}</li>
                <li>Obrażenia: {stats.damage}</li>
                <li>Szansa na trafienie: {stats.chanceOnHit}</li>
                <li>Redukcja obrażeń: {stats.damageReduction}</li>
                <li>Maksymalny hajs: {stats.maxGold}</li>
            </ul>
        </div>
    )
}