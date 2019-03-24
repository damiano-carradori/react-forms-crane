import React from "react";
import { storiesOf } from "@storybook/react";
import Fieldset from "./Fieldset";
import { FormContextProvider } from "../FormContext";
import Text from "../Text";

storiesOf("Fieldset", module)
    .addDecorator(storyFn => (
        <FormContextProvider onSubmit={console.log}>
            {storyFn()}
        </FormContextProvider>
    ))
    .add("default", () => (
        <Fieldset>
            <Text name="text" placeholder="This is a text..." />
        </Fieldset>
    ))
    .add("with legend", () => (
        <Fieldset legend="Group">
            <Text name="text" placeholder="This is a text..." />
        </Fieldset>
    ));
