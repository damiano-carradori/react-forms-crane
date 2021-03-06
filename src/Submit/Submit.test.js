import React from "react";
import { mount } from "enzyme";
import Submit from "./Submit";

describe("Submit", () => {
    it("should create correctly the input with the right props", function() {
        const value = "Submit value";

        const wrapper = mount(<Submit value={value} />);

        const i = wrapper.find("input");

        expect(i.prop("type")).toBe("submit");
        expect(i.prop("value")).toBe(value);
    });
});
