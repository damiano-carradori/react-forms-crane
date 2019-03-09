import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';
import { FormContextProvider } from '../Form/FormContext';

storiesOf('Text', module)
    .addDecorator(storyFn => <FormContextProvider onSubmit={console.log}>{storyFn()}</FormContextProvider>)
    .add('with text', () => (
        <Text name="test" value="test"/>
    ));