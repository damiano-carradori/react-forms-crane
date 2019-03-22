import React from "react";
import { storiesOf } from "@storybook/react";
import Text from "./Text";
import { FormContextProvider } from "../FormContext";

storiesOf("Text", module)
    .addDecorator(storyFn => (
        <FormContextProvider onSubmit={console.log}>
            {storyFn()}
        </FormContextProvider>
    ))
    .add("default", () => (
        <Text name="test" placeholder="Write something here..." />
    ))
    .add("disabled", () => (
        <Text name="test" placeholder="Disabled field" disabled />
    ));
