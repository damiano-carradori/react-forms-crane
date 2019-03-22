import React from 'react'
import { mount } from 'enzyme';
import File from './File';
import { FormContextProvider } from '../Form/FormContext';

describe('File', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'file-name';
        const id = `file_${name}`;

        const wrapper = mount(
            <FormContextProvider onSubmit={jest.fn()}>
                <File
                    name={name}
                />
            </FormContextProvider>,
        );

        const i = wrapper.find('input');
        const l = wrapper.find('label');

        expect(i.prop('type')).toBe('file');
        expect(i.prop('name')).toBe(name);
        expect(i.prop('id')).toBe(id);
        expect(l.prop('htmlFor')).toBe(id);
    });

});