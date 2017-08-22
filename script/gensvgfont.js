const webfontsGenerator = require('webfonts-generator');
var path = require('path')
 
webfontsGenerator({
  files: [
	  path.resolve(__dirname, './../svg/chamber.svg'),
	  path.resolve(__dirname, './../svg//experiment.svg'),
	  path.resolve(__dirname, './../svg//wall.svg')
  ],
  dest: path.resolve(__dirname, './../font/'),
  fontName: 'aeriscommmonsfonts',
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
})