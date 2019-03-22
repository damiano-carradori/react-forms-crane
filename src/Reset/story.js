import React from "react";
import { storiesOf } from "@storybook/react";
import Reset from "./Reset";
import Submit from "../Submit/story";

storiesOf("Reset", module)
    .add("default", () => <Reset />)
    .add("with custom value", () => <Reset value="reset this form now!" />)
    .add("disabled", () => <Reset disabled />);
