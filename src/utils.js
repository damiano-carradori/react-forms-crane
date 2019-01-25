export const kebab_case = string =>
    string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();


export const pipe = functions => data => {
    return functions.reduce(
        (value, func) => func(value),
        data,
    );
};


// value -> defaultValue
// readonly
// disabled
// size
// maxlength


// autocomplete: text, search, url, tel, email, password, datepickers, range, and color
export const addAutoComplete = autoComplete => {
    if (!autoComplete) {
        return null;
    }
    return autoComplete
};

// autoFocus
export const addAutoFocus = attributes => autoFocus => {
    if (!autoFocus) {
        return attributes;
    }
    return {
        ...attributes,
        autoFocus,
    }
};

// form
// formaction: submit, image
// formenctype: submit, image
// formmethod: submit, image
// formnovalidate: submit
// formtarget: submit, image

// height and width: image

// list: needs datalist
// min and max: number, range, date, datetime-local, month, time and week

// multiple:  email, and file
// pattern (regexp): text, search, url, tel, email, and password
export const addPattern = attributes => pattern => {
    if (!pattern) {
        return attributes;
    }
    return {
        ...attributes,
        pattern,
    }
};

// placeholder: text, search, url, tel, email, and password
export const addPlaceholder = attributes => placeholder => {
    if (!placeholder) {
        return attributes;
    }
    return {
        ...attributes,
        placeholder,
    }
};

// required: text, search, url, tel, email, password, date pickers, number, checkbox, radio, and file
export const addRequired = attributes => required => {
    if (!required) {
        return attributes;
    }
    return {
        ...attributes,
        required,
    }
};

// step: number, range, date, datetime-local, month, time and week