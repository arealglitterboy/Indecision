import React from 'react';

const Option = (props) => (
    <article className="option">
        {/* {(props.optionIndex > 0) && <p className="option__index">{props.optionIndex}.</p>} */}
        <i className="option__index">{props.optionIndex}</i>
        <p className="option__text">{props.option}</p>
        <button
            onClick={(e) => {props.handleDeleteOption(props.option)}}
            className="option__remove"
        >
            X
        </button>
    </article>
);

export default Option;