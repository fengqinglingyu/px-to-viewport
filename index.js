const fs = require('fs');
const postcss = require('postcss');
const pxtoviewport = require('postcss-px-to-viewport');
const file = 'main.css';
const css = fs.readFileSync(file, 'utf8');
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
const processedCss = postcss(pxtoviewport(options)).process(css).css;

console.log(processedCss);

const ws = fs.createWriteStream('./build/' + file);
ws.write(processedCss);
