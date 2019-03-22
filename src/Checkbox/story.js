import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import { FormContextProvider } from "../Form/FormContext";

storiesOf("Checkbox", module)
    .addDecorator(storyFn => (
        <FormContextProvider onSubmit={console.log}>
            {storyFn()}
        </FormContextProvider>
    ))
    .add("default", () => <Checkbox name="test" value="test" label="test" />)
    .add("disabled", () => (
        <Checkbox name="test" value="test" label="test" disabled checked />
    ));
