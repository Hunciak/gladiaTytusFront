import React, {SyntheticEvent, useEffect, useState} from "react";





export const GetAllOpponents = () => {
    const [chosenOpponent, setChosenOpponent] = useState({
        name: '',
        id: 0,
    });

    const [allOpponents, setAllOpponents] = useState<{id: number, name: string}[]>([])
    useEffect(() => {

        try {
            (async () => {
               const res = await fetch(`http://localhost:3001/app/allopp`);
               const allOpp = await res.json();

                setAllOpponents(allOpp);
            })()

        } catch (error) {
            console.log('bład podczas pobierania wszystkich przeciwników', error)
        } finally {
            allOpponents.map(x => console.log('ten syf',x.name))
        }
    }, [])

    const onChangeOpp = (e: any): any => {
        const selectedOpp = e.target.value;
        console.log('target vlaue', selectedOpp)
        const selectedValue = allOpponents.filter((opp) => opp.name == selectedOpp)[0];
        setChosenOpponent(selectedValue)
    }

    return <>
        <div>
            <select className='custom-select' value={chosenOpponent.name} onChange={onChangeOpp}>
                {
                    allOpponents.map(opp => (
                        <option key={opp.id} value={opp.name}>{opp.name}</option>
                    ))
                }
            </select>
            <form action="">

            </form>


        </div>
    </>
}