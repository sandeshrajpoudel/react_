import React from"react";
import "./card.styles.css";

export const Card = props=>{
    return( 
    <div className="card-container"> 
    <img alt ="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h5> {props.monster.name}</h5> 
        <p>{props.monster.email}</p>
    </div>

    )
   
}