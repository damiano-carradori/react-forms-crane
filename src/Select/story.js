import React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./Select";
import { FormContextProvider } from "../FormContext";

storiesOf("Select", module)
    .addDecorator(storyFn => (
        <FormContextProvider onSubmit={console.log}>
            {storyFn()}
        </FormContextProvider>
    ))
    .add("default", () => (
        <Select name="test" options={["option1", "option2"]} />
    ))
    .add("multiple", () => (
        <Select name="test" options={["option1", "option2"]} multiple />
    ))
    .add("disabled", () => (
        <Select name="test" options={["option1", "option2"]} disabled />
    ));
