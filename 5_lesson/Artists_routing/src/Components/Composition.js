import React from 'react';

export const Compositions = ({list}) => {     
    return (
        list.map( item=>( <div key={item.id}> Song name: {item.name} </div> ))
    )
}