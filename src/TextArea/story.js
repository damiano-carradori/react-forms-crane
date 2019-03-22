import React from "react";
import { storiesOf } from "@storybook/react";
import TextArea from "./TextArea";
import { FormContextProvider } from "../Form/FormContext";

storiesOf("TextArea", module)
    .addDecorator(storyFn => (
        <FormContextProvider onSubmit={console.log}>
            {storyFn()}
        </FormContextProvider>
    ))
    .add("default", () => (
        <TextArea name="test" rows={4} placeholder="Write something here..." />
    ))
    .add("disabled", () => (
        <TextArea name="test" rows={4} placeholder="Disabled field" disabled />
    ));
