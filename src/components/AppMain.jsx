import React, { useState } from 'react';
import ButtonList from './ButtonList';
import CardList from './CardList';
import languages from '../db/languages';




export default function AppMain() {
    const [item, setItem] = useState(null)
    console.log(item)

    return (
        <div className='container'>
            <ButtonList
                languages={languages}
                setItem={setItem}
                item={item}
            />
            <CardList
                item={item}
            />
        </div>
    )
}
