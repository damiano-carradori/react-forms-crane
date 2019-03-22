export const kebab_case = string =>
    string
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase();

export const mapObject = (object, fn) =>
    Object.keys(object).reduce((result, key) => {
        result[key] = fn(object[key]);
        return result;
    }, {});

export const filterObject = (object, fn) =>
    Object.keys(object)
        .filter(key => fn(object[key]))
        .reduce(
            (result, key) => ({
                ...result,
                [key]: object[key],
            }),
            {}
        );

export const filterObjectKeys = (object, fn) =>
    Object.keys(object)
        .filter(fn)
        .reduce(
            (result, key) => ({
                ...result,
                [key]: object[key],
            }),
            {}
        );
