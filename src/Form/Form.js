import React from "react";
import { FormContext, FormContextProvider } from "../FormContext";

function Form(props) {
    const { className, children, onSubmit } = props;
    return (
        <FormContextProvider onSubmit={onSubmit}>
            <FormContext.Consumer>
                {({ onSubmit: contextSubmit }) => (
                    <form onSubmit={contextSubmit} className={className}>
                        {children}
                    </form>
                )}
            </FormContext.Consumer>
        </FormContextProvider>
    );
}

export default Form;
