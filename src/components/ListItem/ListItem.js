import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    return (
        <li>
            <div className="wrapper">
                {props.text}
                <button className="btn" onClick={() => props.onDelete(props.id)}><i className="fas fa-times"></i></button>
            </div>
        </li>
    );
}

ListItem.propTypes = {
    text: PropTypes.string.isRequired
};

export default ListItem;