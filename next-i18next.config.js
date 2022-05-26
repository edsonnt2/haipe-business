const path = require('path');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  localePath: path.resolve(__dirname, 'src', 'locales'),
};