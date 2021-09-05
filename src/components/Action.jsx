import React from 'react';

import FancyButton from './FancyButton';

const Action = (props) => (
    <div className="action">
        <FancyButton
            className="action__button"
            disabled={!props.hasOptions}
            onClick={props.handleSelection}
            text="What Will You Do?"
        />
    </div>
);

export default Action;