import React, {PureComponent} from 'react'
import {FormContext, FormContextProvider} from './FormContext'
import Text from '../Text'

class Form extends PureComponent {
    render() {
        const {className, children, onSubmit} = this.props;
        return (
            <FormContextProvider onSubmit={onSubmit}>
                <FormContext.Consumer>
                    {({onSubmit: contextSubmit}) => (
                        <form onSubmit={contextSubmit} className={className}>
                            {children}
                        </form>
                    )}
                </FormContext.Consumer>
            </FormContextProvider>
        )
    }
}

Form.Text = Text;

export default Form