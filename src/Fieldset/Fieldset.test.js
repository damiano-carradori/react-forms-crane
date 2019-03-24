import React from "react";
import { shallow } from "enzyme";
import Fieldset from "./Fieldset";
import { Legend } from "./style";

describe("Fieldset", () => {
    it("should render only the given children inside the fieldset", function() {
        const wrapper = shallow(
            <Fieldset>
                <div className="for-test-only" />
                <div className="for-test-only" />
                <div className="for-test-only" />
            </Fieldset>
        );

        expect(wrapper.find("div.for-test-only")).toHaveLength(3);
    });

    it("should render the legend only if present", () => {
        const wrapper = shallow(<Fieldset />);
        const wrapperWithLegend = shallow(<Fieldset legend="legend" />);

        expect(wrapper.find(Legend)).toHaveLength(0);
        expect(wrapperWithLegend.find(Legend)).toHaveLength(1);
    });

    it("should wrote the given string inside the legend", function() {
        const legend = "This is the legend";
        const wrapper = shallow(<Fieldset legend={legend} />);

        const l = wrapper.find(Legend);

        expect(l.text()).toBe(legend);
    });
});
