import React, {createContext, PureComponent} from 'react'

export const FormContext = createContext(null);

export class FormContextProvider extends PureComponent {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            fields: null,
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const {onSubmit} = this.props;
        onSubmit(this.state.fields);
    }

    onChange({target}) {
        const {name, value} = target;

        this.setState(({fields}) => ({
            fields: {
                ...fields,
                [name]: value || undefined
            }
        }));
    }

    render() {
        const {children} = this.props;
        return (
            <FormContext.Provider value={this.state}>
                {children}
            </FormContext.Provider>
        );
    }
}