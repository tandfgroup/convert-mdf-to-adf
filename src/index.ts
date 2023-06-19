const core = require("@actions/core");
const fnTranslate = require("md-to-adf");

const convertToADF = () => {
  try {
    const markdown = core.getInput("md-text");
    const value = "" + fnTranslate(markdown);
    core.setOutput("adf-output", value);
  } catch (err) {
    core.setFailed(err.message);
  }
};

convertToADF();
