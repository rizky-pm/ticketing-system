const CracoLessPlugin = require('craco-less');
const styles = require('./src/antTheme');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { ...styles },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
