const { kebab_case } = require("./utils");

describe("tests for utils", () => {
    it("should transform string with kebab case specs", function() {
        const strings = [
            "normal string",
            "kebab-case",
            "camelCase",
            "twoCamelCase",
            "sneak_case",
        ];
        const kebabStrings = [
            "normal-string",
            "kebab-case",
            "camel-case",
            "two-camel-case",
            "sneak_case",
        ];
        const transformed = strings.map(kebab_case);

        expect(transformed).toEqual(kebabStrings);
    });
});
