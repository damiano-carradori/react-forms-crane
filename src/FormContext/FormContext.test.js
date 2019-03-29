import React from "react";
import { shallow } from "enzyme";
import { FormContext, FormContextProvider } from "./FormContext";

describe("FormContextProvider", () => {
    it("should create a context provider with the right value", function() {
        const wrapper = shallow(<FormContextProvider />);

        const providerValue = wrapper.find(FormContext.Provider).prop("value");

        expect(typeof providerValue.onSubmit).toBe("function");
        expect(typeof providerValue.onChange).toBe("function");
        expect(typeof providerValue.onMount).toBe("function");
        expect(typeof providerValue.fields).toBe("object");
        expect(providerValue.fields).toEqual({});
        expect(typeof providerValue.values).toBe("object");
        expect(providerValue.values).toEqual({});
    });

    it("should add a field and its value on mount", function() {
        const field = {
            name: "field",
            type: "text",
            ref: {
                value: "value",
            },
        };

        const wrapper = shallow(<FormContextProvider />);

        wrapper.prop("value").onMount(field);

        expect(wrapper.prop("value").fields).toEqual({ [field.name]: field });
        expect(wrapper.prop("value").values).toEqual({
            [field.name]: field.ref.value,
        });
    });

    it("should change a field value on change", function() {
        const field = {
            name: "field",
            type: "text",
            ref: {
                value: "value",
            },
        };

        const wrapper = shallow(<FormContextProvider />);

        wrapper.prop("value").onMount(field);

        const changeEvent = {
            target: {
                name: "field",
                value: "changed value",
            },
        };

        wrapper.prop("value").onChange(changeEvent);

        expect(wrapper.prop("value").fields).toEqual({ [field.name]: field });
        expect(wrapper.prop("value").values).toEqual({
            [field.name]: changeEvent.target.value,
        });
    });

    it("should call the onSubmit function with the fields values on submit", function() {
        const onSubmit = jest.fn();
        const field = {
            name: "field",
            type: "text",
            ref: {
                value: "value",
            },
        };
        const event = { preventDefault: () => {} };

        const wrapper = shallow(<FormContextProvider onSubmit={onSubmit} />);

        wrapper.prop("value").onMount(field);
        wrapper.prop("value").onSubmit(event);

        expect(onSubmit).toHaveBeenLastCalledWith({
            [field.name]: field.ref.value,
        });
    });
});
