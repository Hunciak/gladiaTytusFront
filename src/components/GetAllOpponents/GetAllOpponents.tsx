import React, {SyntheticEvent, useEffect, useState} from "react";
import { AllOppType, UserOppIdType } from "types";
import {GetOneOpponent} from "../GetOneOpponent/GetOneOpponent";

interface Props {
    id: string;
}

export const GetAllOpponents = (props: string) => {

    const [getOneFlag, setGetOneFlag] = useState(false)
    const [chosenOpponent, setChosenOpponent] = useState({
        name: '',
        id: 0,
    });
    const propOneOpp:UserOppIdType = {
        id: props,
        opponentId: chosenOpponent.id,
    }

    const [allOpponents, setAllOpponents] = useState<AllOppType[]>([{
        id: 0,
        name: '',
    }])
    useEffect(() => {

        try {
            (async () => {
               const res = await fetch(`http://localhost:3001/app/allopp`);
               const allOpp = await res.json();
                setAllOpponents(allOpp);
            })()

        } catch (error) {
            console.log('bład podczas pobierania wszystkich przeciwników', error)
        }
    }, [])

    const setFlag = (e:SyntheticEvent) => {
        e.preventDefault()
        setGetOneFlag(true);
    }



    const onChangeOpp = (e: any): void => {
        const selectedOpp = e.target.value;
        const selectedValue = allOpponents.filter((opp) => opp.name == selectedOpp)[0];
        setChosenOpponent(selectedValue)
    }

    return <>
        <div>
            <p>Wybierz przeciwnika!</p>
            <select className='custom-select' value={chosenOpponent.name} onChange={onChangeOpp}>
                {
                    allOpponents.map(opp => (
                        <option key={opp.id} value={opp.name}>{opp.name}</option>
                    ))
                }
            </select>
            <button type='button' onClick={setFlag}>Wybierz</button>
            {(getOneFlag && propOneOpp.id) && <GetOneOpponent id={propOneOpp.id} opponentId={propOneOpp.opponentId}/>}
        </div>
    </>
}