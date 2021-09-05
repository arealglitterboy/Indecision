import React from "react";
import FancyButton from "./FancyButton";

const OptionsHeader = (props) => (
    <header className="widget__header">
        <h4 className="widget__header__text">
            {(props.hasOptions) ? 'Here are your options' : 'Enter an option'}
        </h4>
        {
            (props.hasOptions) &&
            <FancyButton
                className="widget__header__button"
                onClick={props.handleDeleteOptions}
                text="Remove All"
            />
        }
    </header>
);

export default OptionsHeader;