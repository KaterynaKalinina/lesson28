import React from "react";
import PropTypes from "prop-types";
import { curry, includes } from "lodash";
import classnames from "classnames";


const List = ({ list, selected, onSelect, onDelete }) => {
    const handleElementSelect = curry((element, _) =>{
        onSelect && onSelect(element);
    });

    const handleElementDelete = curry((element, _) =>{
        onDelete && onDelete(element);
    });
    
    return (
        <ul>
            {list.map(listElement => (
                <li className={classnames({crossed: includes(selected, listElement)})}
                onClick={handleElementSelect(listElement)}
                key={listElement.id}
                >
            <span onClick={handleElementSelect(listElement)}>{listElement.value}</span>
            <span onClick={handleElementDelete(listElement)}>X</span></li>
            ))}
        </ul>
    );
};

List.propTypes = {
    list: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    onSelect: PropTypes.func,
    onDelete: PropTypes.func
};

export default List;