import React from "react";
import { storiesOf } from "@storybook/react";
import Form from "./Form";
import Text from "../Text";
import Password from "../Password";
import Checkbox from "../Checkbox";
import RadioButton from "../RadioButton";
import Select from "../Select";
import TextArea from "../TextArea";
import Submit from "../Submit";
import Fieldset from "../Fieldset";

storiesOf("Form", module)
    .add("default", () => (
        <Form onSubmit={console.log}>
            <Text name="text" placeholder="Insert your text" />
            <Password name="password" placeholder="Insert your password" />
            <Checkbox name="checkbox" label="This is a checkbox" />
            <Checkbox name="checkbox_2" label="This is a checkbox 1" />
            <Checkbox name="checkbox_2" label="This is a checkbox 2" />
            <RadioButton name="radio" label="This is a Radio Button 1" />
            <RadioButton name="radio" label="This is a Radio Button 2" />
            <Select name="select" options={["option 1", "options 2"]} />
            <TextArea name="textarea" placeholder="This is a textarea" />
            <Submit />
        </Form>
    ))
    .add("with groups", () => (
        <Form onSubmit={console.log}>
            <Fieldset legend="Group 1">
                <Text name="first-name" placeholder="Insert your first name" />
                <Text name="last-name" placeholder="Insert your last name" />
            </Fieldset>
            <Fieldset legend="Group 2">
                <Text
                    name="first-name-2"
                    placeholder="Insert your first name"
                />
                <Text name="last-name-2" placeholder="Insert your last name" />
            </Fieldset>
            <Submit />
        </Form>
    ));
