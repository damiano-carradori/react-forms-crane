import React from "react";
import { storiesOf } from "@storybook/react";
import Submit from "./Submit";

storiesOf("Submit", module)
    .add("default", () => <Submit />)
    .add("with custom value", () => <Submit value="submit this form now!" />)
    .add("disabled", () => <Submit disabled />);
