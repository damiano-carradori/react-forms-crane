import React, { memo, createContext, useState } from "react";
import { mapObject } from "../utils";

export const FormContext = createContext(null);

export const FormContextProvider = memo(
    function FormContextProvider(props) {
        const [fields, setFields] = useState({});
        const [values, setValues] = useState({});

        const onSubmit = event => {
            event.preventDefault();
            const { onSubmit } = props;

            const returnValues = mapObject(values, value => {
                if (typeof value !== "object" || value === null) {
                    return value;
                }
                if (Object.keys(value).length === 1) {
                    return Object.values(value)[0];
                }
                return Object.keys(value).filter(item => value[item]);
            });

            onSubmit(returnValues);
        };

        const onChange = ({ target }) => {
            const { name, value, checked } = target;

            let content = values[name];

            switch (fields[name].type) {
                case "checkbox":
                    content = {
                        ...content,
                        [value]: checked,
                    };
                    break;
                case "radio":
                    if (checked) {
                        content = value;
                    }
                    break;
                case "file":
                    const { files } = target;
                    content = files;
                    break;
                default:
                    content = value;
            }

            setValues({
                ...values,
                [name]: content,
            });
        };

        const onMount = field => {
            console.log("mounted");
            const { name, type, ref } = field;

            let content;
            const { value } = ref;

            switch (type) {
                case "checkbox":
                    content = {
                        ...(values[name] && values[name]),
                        [value]: ref.checked,
                    };
                    break;
                case "radio":
                    content = values[name] || null;
                    if (ref.checked) {
                        content = value;
                    }
                    break;
                default:
                    content = value;
            }

            setFields({
                ...fields,
                [name]: field,
            });
            setValues({
                ...values,
                [name]: content,
            });
        };

        const { children } = props;

        const contextValue = {
            onSubmit,
            onChange,
            onMount,
            fields,
            values,
        };

        return (
            <FormContext.Provider value={contextValue}>
                {children}
            </FormContext.Provider>
        );
    },
    (oldProps, newProps) => oldProps.onSubmit !== newProps.onSubmit
);
