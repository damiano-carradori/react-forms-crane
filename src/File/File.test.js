jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import File from './File';

describe('File', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'file-name';
        const label = 'File label';
        const id = `file_${name}`;

        const wrapper = shallow(
            <File
                name={name}
                label={label}
            />,
            { disableLifecycleMethods: true },
        );

        const i = wrapper.find('input');
        const l = wrapper.find('label');

        expect(i.prop('type')).toBe('file');
        expect(i.prop('name')).toBe(name);
        expect(i.prop('id')).toBe(id);
        expect(l.text()).toBe(label);
        expect(l.prop('htmlFor')).toBe(id);
    });

});