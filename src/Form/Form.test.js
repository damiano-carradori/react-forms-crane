import React from 'react'
import { mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {

    it('should call the onSubmit function on form submit', function () {
        const onSubmit = jest.fn();

        const wrapper = mount(
            <Form
                onSubmit={onSubmit}
            />,
        );

        const f = wrapper.find('form');

        f.simulate('submit');

        expect(onSubmit).toHaveBeenCalled()
    });

});