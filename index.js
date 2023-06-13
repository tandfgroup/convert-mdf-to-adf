const core = require('@actions/core');
const fnTranslate = require('md-to-adf')

const convertToADF = () => {
    try {
        const markdown = core.getInput('text');
        const value = '' + fnTranslate(markdown)
        core.setOutput(`_${adfOutput}`, value);
    } catch (err) {
        core.setFailed(err.message);
    }
}

convertToADF()


