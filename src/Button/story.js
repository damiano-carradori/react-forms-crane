import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
    .add("default", () => <Button value="click me!" />)
    .add("disabled", () => <Button value="click me!" disabled />);
