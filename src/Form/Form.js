import React from 'react'
import { FormContext, FormContextProvider } from './FormContext'
import Text from '../Text'
import Checkbox from '../Checkbox'
import RadioButton from '../RadioButton'
import Password from '../Password'
import Select from '../Select'
import TextArea from '../TextArea'
import File from '../File'
import Button from '../Button'
import Submit from '../Submit'
import Reset from '../Reset'

function Form(props) {
    const { className, children, onSubmit } = props;
    return (
        <FormContextProvider onSubmit={onSubmit}>
            <FormContext.Consumer>
                {({ onSubmit: contextSubmit }) => (
                    <form onSubmit={contextSubmit} className={className}>
                        {children}
                    </form>
                )}
            </FormContext.Consumer>
        </FormContextProvider>
    )

}

Form.Text = Text;
Form.Checkbox = Checkbox;
Form.RadioButton = RadioButton;
Form.Password = Password;
Form.Select = Select;
Form.TextArea = TextArea;
Form.File = File;
Form.Button = Button;
Form.Submit = Submit;
Form.Reset = Reset;

export default Form