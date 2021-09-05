import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import popup from './OptionPopup';
import OptionsHeader from './OptionsHeader';

export default class IndecisionApp extends React.Component {
    state = {
        subtitle: 'Get some decisiveness in your life!',
        options: []
    };

    render() {
        return (
            <main className="main">
                <Header subtitle={this.state.subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handleSelection={this.handleSelection}
                />
                <article className="widget-container">
                    <OptionsHeader 
                        hasOptions={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption} />
                </article>
            </main>
        )
    }

    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    
    handleDeleteOption = (option) => {
        this.setState((prev) => ({options: prev.options.filter(item => item !== option)}))
    };
    
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a value to add item';
        } else if (this.state.options.indexOf(option) != -1) {
            return 'Enter a unique value to add item';
        }
        
        this.setState((prev) => ({ options: prev.options.concat(option) }));
    };
    
    handleSelection = () => {
        if (this.state.options && this.state.options.length > 0) {
            const rand = Math.floor(Math.random() * this.state.options.length);
            popup(this.state.options[rand]);
        }
    };

    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(error) {}
    };
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    };
};