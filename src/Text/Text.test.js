import React from "react";
import { mount } from "enzyme";
import Text from "./Text";
import { FormContextProvider } from "../Form/FormContext";

describe("Text", () => {
    it("should create correctly the input with the right props", function() {
        const name = "text-name";
        const value = "Text value";

        const wrapper = mount(
            <FormContextProvider onSubmit={jest.fn()}>
                <Text name={name} defaultValue={value} />
            </FormContextProvider>
        );

        const i = wrapper.find("input");

        expect(i.prop("type")).toBe("text");
        expect(i.prop("name")).toBe(name);
        expect(i.prop("defaultValue")).toBe(value);
    });
});
