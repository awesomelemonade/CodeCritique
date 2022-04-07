import React, { Component } from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect }) => {
    return (
        <ul className="list-group">
            {items.map(item => (
                <li onClick={() => onItemSelect(item[textProperty])} key={item[valueProperty]} className="list-group-item">
                    {item[textProperty]}
                </li>)
            )}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'title',
    valueProperty: 'title'
}

export default ListGroup;