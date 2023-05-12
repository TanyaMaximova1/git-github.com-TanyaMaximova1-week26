import React from 'react'

function Cards (props) {
    return (
        <div className="cards">
        <div>Вселенная: {props.universe}</div>
        <div>Альтер эго: {props.alterego}</div>
        <div>Занятость: {props.occupation}</div>
        <div>Друзья: {props.friends}</div>
        <div>Суперсила: {props.superpowers}</div>
        {/* <div>Изображение: <img class='image' src="${props.url}" alt="Изображение супергероя"></img></div> */}
        <div>История: {props.info}</div>
        </div>
    );
}
    export default Cards;