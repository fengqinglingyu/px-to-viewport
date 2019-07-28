const fs = require('fs');
const postcss = require('postcss');
const pxtorem = require('postcss-px-to-viewport');
const css = fs.readFileSync('main.css', 'utf8');
const options = {
  unitToConvert: 'px',
  viewportWidth: 375,
  unitPrecision: 3,
  propList: ['*'],
  viewportUnit: 'vw',
  fontViewportUnit: 'vw',
  selectorBlackList: [],
  minPixelValue: 1,
  mediaQuery: false,
  replace: true,
  exclude: [],
  landscape: false,
  landscapeUnit: 'vw',
  landscapeWidth: 568
};
const processedCss = postcss(pxtorem(options)).process(css).css;

console.log(processedCss);

const ws = fs.createWriteStream('./build/compiled.css');
ws.write(processedCss);
