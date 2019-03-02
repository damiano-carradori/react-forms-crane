jest.mock('../Form');
import React from 'react'
import { shallow } from 'enzyme';
import Text from './Text';

describe('Text', () => {

    it('should create correctly the input with the right props', function () {
        const name = 'text-name';
        const value = 'Text value';

        const wrapper = shallow(
            <Text
                name={name}
                defaultValue={value}
            />,
            { disableLifecycleMethods: true },
        );

        const i = wrapper.find('input');

        expect(i.prop('type')).toBe('text');
        expect(i.prop('name')).toBe(name);
        expect(i.prop('defaultValue')).toBe(value);
    });

});