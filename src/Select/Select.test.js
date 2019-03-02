jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import Select from './Select';

describe('Select', () => {

    it('should create correctly the select with the right props', function () {
        const name = 'select-name';
        const value = 'Select value';
        const options = [
            {
                value: 'option-1',
                label: 'Option 1',
            },
            {
                value: 'option-2',
                label: 'Option 2',
            },
            {
                value: 'option-3',
                label: 'Option 3',
            },
        ];

        const wrapper = shallow(
            <Select
                name={name}
                value={value}
                options={options}
            />,
            { disableLifecycleMethods: true },
        );

        const s = wrapper.find('select');
        const o = wrapper.find('option');

        expect(s.prop('name')).toBe(name);
        expect(s.prop('value')).toBe(value);
        expect(o).toHaveLength(3);

        o.forEach((option, i) => {
            expect(option.prop('value')).toBe(options[i].value);
            expect(option.text()).toBe(options[i].label);
        })
    });

});