import React from "react";
import { mount } from "enzyme";
import Password from "./Password";
import { FormContextProvider } from "../Form/FormContext";

describe("Password", () => {
    it("should create correctly the input with the right props", function() {
        const name = "password-name";

        const wrapper = mount(
            <FormContextProvider onSubmit={jest.fn()}>
                <Password name={name} />
            </FormContextProvider>
        );

        const i = wrapper.find("input");

        expect(i.prop("type")).toBe("password");
        expect(i.prop("name")).toBe(name);
    });
});
