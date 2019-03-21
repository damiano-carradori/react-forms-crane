import React from 'react';
import { storiesOf } from '@storybook/react';
import Select from './Select';
import Form from '../Form';
import Submit from '../Submit';

storiesOf('Select', module)
    .addDecorator(storyFn => <Form onSubmit={console.log}>{storyFn()}</Form>)
    .add('default', () => (
        <Select name="test" options={['option1', 'option2']}/>
    ))
    .add('multiple', () => (
        <Select name="test" options={['option1', 'option2']} multiple/>
    ))
    .add('disabled', () => (
        <Select name="test" options={['option1', 'option2']} disabled/>
    ))
    .add('test', () => (
        <React.Fragment>
            <Select name="test" options={[{ value: 'option1', label: 'Option 1' }, { value: 'option2', label: 'Option 2' }]} multiple/>
            <Select name="test2" options={['option1', 'option2']}/>
            <Submit/>
        </React.Fragment>
    ));