import React from 'react'
import { mount } from 'enzyme';
import TextArea from './TextArea';
import { FormContextProvider } from '../Form/FormContext';

describe('TextArea', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'text-name';
        const value = 'TextArea value';
        const cols = 3;
        const rows = 3;

        const wrapper = mount(
            <FormContextProvider onSubmit={jest.fn()}>
                <TextArea
                    name={name}
                    value={value}
                    cols={cols}
                    rows={rows}
                />
            </FormContextProvider>,
        );

        const t = wrapper.find('textarea');

        expect(t.prop('name')).toBe(name);
        expect(t.prop('defaultValue')).toBe(value);
        expect(t.prop('cols')).toBe(cols);
        expect(t.prop('rows')).toBe(rows);
    });

});