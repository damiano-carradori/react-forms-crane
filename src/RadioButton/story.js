import React from 'react';
import { storiesOf } from '@storybook/react';
import RadioButton from './RadioButton';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('RadioButton', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('default', () => (
        <React.Fragment>
            <RadioButton name="test" value="test1" label="first option"/>
            <RadioButton name="test" value="test2" label="second option"/>
        </React.Fragment>
    ))
    .add('disabled', () => (
        <React.Fragment>
            <RadioButton name="test" value="test1" label="this is a very long text that wrap on multiples lines this is a very long text that wrap on multiples lines this is a very long text that wrap on multiples lines this is a very long text that wrap on multiples lines" disabled checked />
            <RadioButton name="test" value="test2" label="second option" disabled />
        </React.Fragment>
    ));