import React from 'react';

import Option from './Option';

const Options = (props) => (
    <section className="options">                    
        {getOptions(props.options, props.handleDeleteOption)}
    </section>
);

const getOptions = (options, handleDeleteOption) => (
    options.map((option, index) => (
        <Option
            key={option}
            option={option}
            handleDeleteOption={handleDeleteOption}
            optionIndex={index + 1}
        />
    ))
);

export default Options;