import React from 'react';
import Characters from './characters';


export default function CharacterList(props){
    return(
        <div className='characterlist'>

        <div>
        {props.starwarsChars.map(Character => (
            <Characters Characters={Character} />
          ))} </div>
        
        </div>
    )
}