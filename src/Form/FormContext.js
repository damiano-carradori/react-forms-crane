import React, { Component, createContext } from 'react'

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
        const { onSubmit } = this.props;
        onSubmit(this.state.values);
    }

    onChange({ target }) {
        const { name, value } = target;

        this.setState(({ fields, values }) => {

            let content;

            switch (fields[name].type) {
                case 'checkbox':
                    const { checked } = target;
                    content = values[name] || [];
                    if (checked) {
                        content = [...content, value];
                    } else {
                        const position = content.indexOf(value);
                        content = [
                            ...content.slice(0, position),
                            ...content.slice(position + 1),
                        ];
                    }
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
        const { name } = field;

        this.setState(({ fields }) => ({
            fields: {
                ...fields,
                [name]: field,
            },
        }));
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