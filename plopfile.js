module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("template", {
    description: "template for a new package",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "package name",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "packages/{{dashCase name}}/package.json",
        templateFile: "templates/package.json.hbs",
			},
      {
        type: "add",
        path: "packages/{{dashCase name}}/src/index.ts",
        templateFile: "templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "packages/{{dashCase name}}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{dashCase name}}/jest.config.js",
        templateFile: "templates/jest.config.js.hbs",
      },
    ],
  });
};
