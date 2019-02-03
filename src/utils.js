export const kebab_case = string =>
    string
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();

export const mapObject = (object, fn) =>
    Object.keys(object).reduce((result, key) => {
        result[key] = fn(object[key]);
        return result
    }, {});