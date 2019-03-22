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
        const instance = wrapper.instance();

        instance.onMount(field);

        expect(wrapper.state("fields")).toEqual({ [field.name]: field });
        expect(wrapper.state("values")).toEqual({
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
        const instance = wrapper.instance();

        instance.onMount(field);

        const changeEvent = {
            target: {
                name: "field",
                value: "changed value",
            },
        };

        instance.onChange(changeEvent);

        expect(wrapper.state("fields")).toEqual({ [field.name]: field });
        expect(wrapper.state("values")).toEqual({
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
        const instance = wrapper.instance();

        instance.onMount(field);
        instance.onSubmit(event);

        expect(onSubmit).toHaveBeenLastCalledWith({
            [field.name]: field.ref.value,
        });
    });
});
