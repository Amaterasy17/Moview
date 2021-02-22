const { alias, configPaths } = require("react-app-rewired");

module.exports = function override(config) {
  return alias(configPaths("./tsconfig.paths.json"))(config);
};
