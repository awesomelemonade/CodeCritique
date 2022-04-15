import React, { Component } from 'react';

const ListGroup = ({ items, textProperty, valueProperty, onItemSelect, selection }) => {
    return (
        <ul className="list-group">
            {items.map(item => {
                if (selection === item[textProperty]) {
                    return <li onClick={() => onItemSelect(item[textProperty])} key={item[valueProperty]} className="list-group-item active">{item[textProperty]}</li>
                }

                return <li onClick={() => onItemSelect(item[textProperty])} key={item[valueProperty]} className="list-group-item">{item[textProperty]}</li>

            }
            )}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'title',
    valueProperty: 'title'
}

export default ListGroup;