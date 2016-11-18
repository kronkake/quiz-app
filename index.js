import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  lightBlue500, lightBlue700,
  blueA200,
  grey100, grey400, lightBlue100, grey500, grey600,
  white, grey900, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import './styles/global.css'

import App from './src/app.js';

injectTapEventPlugin();



const muiTheme =  getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: lightBlue500,
    primary2Color: lightBlue700,
    primary3Color: lightBlue100,
    accent1Color: blueA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: grey900,
    alternateTextColor: grey600,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(fullBlack, 0.3),
    pickerHeaderColor: lightBlue500,
    clockCircleColor: fade(fullBlack, 0.07),
    shadowColor: fullBlack,
  }
});

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
      <App/>
    </MuiThemeProvider>,
document.getElementById('react-root'));
