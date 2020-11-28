import React from 'react';


export const Table = ({store}) => (
    <table>
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
        </tr>
        <tbody>
            {/**
            aqui va otro componente!! 
            */}
            {
                store.map((item, index)=><Content
                key={index}
                stocked= {item.stocked}
                name={item.name}
                price={item.price}
                />)
            }
        </tbody>
    </table>
);


const Content = (name, price) => {
    return(
        <tr>
            <td
            style={{
                color:stocked ? "black" : "red"
            }}
            >{name}</td>
            <td>{price}</td>
        </tr>
    )
}