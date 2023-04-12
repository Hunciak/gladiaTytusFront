import React, {SyntheticEvent, useEffect, useState} from "react";
import { AllEquipment } from "types";
import {Btn} from "../common/Btn";


interface Props {
    signIn: string;
}

export const GetUserEq = (props: Props) => {

    const [chosenEquipment, setChosenEquipment] = useState<AllEquipment>({
        name: '',
        type: '',
        tier: 0,
        stats_attack: 0,
        stats_defence: 0,
        stats_strength: 0,
        stats_stamina: 0,
        stats_dexterity: 0,
        stats_charisma: 0,
    })

    const [equipment, setEquipment] = useState<AllEquipment[]>([{
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
        try {
            (async () => {
                const res = await fetch(`http://localhost:3001/app/user/eq/${props}`)
                const usersEquipment = await res.json();
                setEquipment(usersEquipment);
            })()
        } catch(error) {
            console.log('błąd w pobieraniu ekwipunku', error)
        }
    },[])

    const usersEquipment = async (e:SyntheticEvent) => {
        e.preventDefault();

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
        }
    };

    const onChangeEq = (e: any): any => {
        const selectedEq = e.target.value;
        const selectedValue = equipment.filter((opp) => opp.name == selectedEq)[0];
        setChosenEquipment(selectedValue)

    }

    return  <div>
        <h1>Twój ekwipunek</h1>
            <form action="" onSubmit={usersEquipment} >
                <ul>
                    <li>Pancerz:
                        <select  className='custom-select' value='armor' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'armor';
                                })
                                    .map(eq => (
                                    <option key={eq.name} value={eq.name}>{eq.name}</option>
                                ))
                            }

                        </select>
                    </li>

                    <li>Hełm:
                        <select  className='custom-select' value='helmet' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'helmet';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Rękawice:
                        <select className='custom-select' value='gloves' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'gloves';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Buty:
                        <select className='custom-select' value='shoes' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'shoes';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Pierścień:
                        <select className='custom-select' value='ring' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'ring';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Naszyjnik:
                        <select className='custom-select' value='necklace' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'necklace';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Kolczyki:
                        <select className='custom-select' value='earring' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'earring';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Broń:
                        <select className='custom-select' value='weapon' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'weapon';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>

                    <li>Tarcza:
                        <select className='custom-select' value='shield' onChange={onChangeEq}>
                            {
                                equipment.filter((eq) => {
                                    return eq.type === 'shield';
                                })
                                    .map(eq => (
                                        <option key={eq.name} value={eq.name}>{eq.name}</option>
                                    ))
                            }
                        </select>
                    </li>
                </ul>
            <Btn text={'Zapisz ekwipunek'}/>
            </form>
    </div>
}