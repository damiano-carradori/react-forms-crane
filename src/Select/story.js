import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('Select', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <Select name="test" options={['option1','option2']}/>
    ));