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
        const { name, value, checked } = target;

        this.setState(({ fields, values }) => {

            let content = values[name];

            switch (fields[name].type) {
                case 'checkbox':
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
                    content = values[name] || [];
                    if (ref.checked) {
                        content = [...content, value];
                    }
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