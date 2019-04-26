import React from 'react';
import './StarWars.css';


export default function Characters(props){
    return (
        <div className='characters'>
         
        <h2>{props.Characters.name}</h2>
        <p><a href={props.Characters.species}>{props.Characters.species}</a></p>
        <p>{props.Characters.gender}</p>
        <p>{props.Characters.height}</p>
        <p><a href={props.Characters.homeworld}>{props.Characters.homeworld}</a></p>
       
        
        
        
        </div>
    )
}