import React from "react";

//  TODO: Work on props; enable all button props
//  TODO: Make sure the SCSS files are using best practices

const FancyButton = (props) => (
    <button
        className={"fancy-button " + props.className}
        data-fancy-button--label={props.text}
        onClick={props.onClick}
    >
        {props.text}
    </button>
);

export default FancyButton;