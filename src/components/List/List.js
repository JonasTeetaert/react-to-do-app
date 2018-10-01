import React from 'react';
import ListItem from '../ListItem/ListItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const List = (props) => {
    return (
        <ul>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={1000}>
                {
                    props.items.map((item, i) => {
                        return (
                            <ListItem key={item} id={i} text={item} onDelete={props.onDelete} />
                        );
                    })
                }
            </ReactCSSTransitionGroup>
        </ul>
    );
};

export default List;