import React, { Component, createContext } from 'react'
import { mapObject } from '../utils';

export const FormContext = createContext(null);

export class FormContextProvider extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onMount = this.onMount.bind(this);

        this.state = {
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            onMount: this.onMount,
            fields: {},
            values: {},
        }
    }

    shouldComponentUpdate(nextProps) {
        const { onSubmit } = this.props;
        return onSubmit !== nextProps.onSubmit;
    }

    onSubmit(event) {
        event.preventDefault();
        const { values } = this.state;
        const { onSubmit } = this.props;

        const returnValues = mapObject(values, value => {
            if (typeof value !== 'object' || value === null) {
                return value;
            }
            if (Object.keys(value).length === 1) {
                return Object.values(value)[0];
            }
            return Object.keys(value).filter(item => value[item])
        });

        onSubmit(returnValues);
    }

    onChange({ target }) {
        const { name, value, checked } = target;

        this.setState(({ fields, values }) => {

            let content = values[name];

            switch (fields[name].type) {
                case 'checkbox':
                    content = {
                        ...content,
                        [value]: checked,
                    };
                    break;
                case 'radio':
                    if (checked) {
                        content = value;
                    }
                    break;
                case 'file':
                    const { files } = target;
                    content = files;
                    break;
                default:
                    content = value;
            }

            return {
                values: {
                    ...values,
                    [name]: content,
                },
            }
        });
    }

    onMount(field) {
        const { name, type, ref } = field;

        this.setState(({ fields, values }) => {
            let content;
            const { value } = ref;

            switch (type) {
                case 'checkbox':
                    content = {
                        ...(values[name] && values[name]),
                        [value]: ref.checked,
                    };
                    break;
                case 'radio':
                    content = values[name] || null;
                    if (ref.checked) {
                        content = value;
                    }
                    break;
                default:
                    content = value;
            }

            return {
                fields: {
                    ...fields,
                    [name]: field,
                },
                values: {
                    ...values,
                    [name]: content,
                },
            }
        });
    }

    render() {
        const { children } = this.props;
        return (
            <FormContext.Provider value={this.state}>
                {children}
            </FormContext.Provider>
        );
    }
}