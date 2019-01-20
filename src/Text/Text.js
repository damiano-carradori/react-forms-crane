import React, {Component} from 'react'
import {FormContext} from '../Form'

class Text extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {name} = this.props;
        const {onMount} = this.context;

        onMount({
            name,
            type: 'text',

        });
    }

    render() {
        const {name, placeholder} = this.props;
        const {onChange} = this.context;
        return (
            <input type="text" name={name} placeholder={placeholder} onChange={onChange}/>
        );
    }
}

Text.contextType = FormContext;

export default Text