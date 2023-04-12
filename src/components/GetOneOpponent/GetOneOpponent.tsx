import React, {SyntheticEvent, useEffect, useState} from "react";

import {AllOpponentStats, FightResType, UserOppIdType} from "types"

interface Props {
    id: string;
    opponentId: number;
}

export const GetOneOpponent = (props: Props) => {

    const [pair, setPair] = useState<UserOppIdType>({
        id: '',
        opponentId: 0,
    });

    const [stats, setStats] = useState<AllOpponentStats>({
        name: '',
        hp: 0,
        tier: 0,
        damage: 0,
        chanceOnHit: 0,
        damageReduction: 0,
        maxGold: 0,
    });

    const [fightRes, setFightRes] = useState<FightResType>({
        win: false,
        userLog: [''],
        userHp: 0,
        oppHp: 0,
        gold: 0,
    })
    const [flagFight, setFlagFight] = useState(false)

    useEffect( () => {
      try {
          (async () => {
            const res = await fetch(`http://localhost:3001/app/opp/${props.opponentId}`)
            const opponentStats = await res.json();
              setStats(stats => ({
                  ...stats,
                  ...opponentStats,
              }))
              setPair(pair => ({
                  ...pair,
                  id: props.id,
                  opponentId: props.opponentId,
              }))
          })()
        } catch (error) {
            console.log('coś poszło nieu tak w axios GetOneOpponent', error)
        }
    },[]);

    const fightResult = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            console.log('wysyłam do be', pair)
            const res = await fetch(`http://localhost:3001/app/fight`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pair)
            })
            const resp = await res.json()
            setFightRes(fightRes => ({
                ...fightRes,
                ...resp,
            }))
            setFlagFight(true);


        } catch (error) {
            console.log('Błąd modułu walki', error)
        }

    }

    return (
        <div>
            <h1>Twoim przeciwnikiem jest: {stats.name}</h1>
            <ul>
                <li>Hp: {stats.hp}</li>
                <li>tier: {stats.tier}</li>
                <li>Obrażenia: {stats.damage}</li>
                <li>Szansa na trafienie: {stats.chanceOnHit}</li>
                <li>Redukcja obrażeń: {stats.damageReduction}</li>
                <li>Maksymalny hajs: {stats.maxGold}</li>
            </ul>
            <button onClick={fightResult} >Walcz!</button>
            {
                flagFight ? (fightRes.win ? <p>Wygrałeś walkę!, otrzymujesz {fightRes.gold} PLN</p> : <p>Przegrałeś, nic nie dostajesz!</p>) : null
            }
            {
                flagFight ? (fightRes.userHp ? <p>Zostało ci {fightRes.userHp} HP</p> : <p>Przegrałeś i nie masz HP!</p>) : null
            }

            {
                fightRes.userLog.map((log, index) => <p key={index}>{log}</p>)
            }
        </div>
    )
}