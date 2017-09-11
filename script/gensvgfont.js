const webfontsGenerator = require('webfonts-generator');
var path = require('path')
 
webfontsGenerator({
  files: [
	  path.resolve(__dirname, './../svg/chamber.svg'),
	  path.resolve(__dirname, './../svg//experiment.svg'),
	  path.resolve(__dirname, './../svg//wall.svg'),
	  path.resolve(__dirname, './../svg//ionization.svg'),
	  path.resolve(__dirname, './../svg//resolution.svg'),
	  path.resolve(__dirname, './../svg//spectrum.svg'),
	  path.resolve(__dirname, './../svg//aircraft.svg'),
	  path.resolve(__dirname, './../svg//balloon.svg'),
	  path.resolve(__dirname, './../svg//eos.svg'),
	  path.resolve(__dirname, './../svg//insitulandplatform.svg'),
	  path.resolve(__dirname, './../svg//spacestation.svg'),
	  path.resolve(__dirname, './../svg//atmosphericsimulationchamber.svg'),
	  path.resolve(__dirname, './../svg//unknown.svg')
  ],
  dest: path.resolve(__dirname, './../font/'),
  templateOptions : {
	  classPrefix: 'aeris-icon-',
	  baseSelector: '.aeris-icon'
  },
  fontName: 'aeriscommmonsfonts'
}, function(error) {
  if (error) {
    console.log('Fail!', error);
  } else {
    console.log('Done!');
  }
})