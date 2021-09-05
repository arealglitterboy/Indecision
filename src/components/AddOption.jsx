import React from 'react';

import FancyButton from './FancyButton';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    render() {
        return (
            <footer className="add-option">
                {(this.state.error && <p className="error">{this.state.error}</p>)}
                <form onSubmit={this.handleSubmit} className="add-option__form">
                    <input type="text" className="add-option__form__input" name="option" placeholder="What do you need to do?"/>
                    <FancyButton className="add-option__form__button" text="Add" />
                </form>
            </footer>
        );
        // * input element has name 'option'
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const error = this.props.handleAddOption(e.target.elements.option.value.trim());
        
        this.setState(() => ({ error }));
        
        if(!error) {
            e.target.elements.option.value = '';
        }
    };
};