import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  lightBlue500, lightBlue700,
  blueA200,
  grey100, grey400, lightBlue100, blueGrey50, grey500, grey600,
  white, grey900, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import './styles/global.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import configureStore from './src/store/configureStore';
import {Provider} from 'react-redux';

import App from './src/app.js';

import Questions from './src/components/questions';
import SetupQuiz from './src/components/setupquiz';
import Users from './src/components/users';

injectTapEventPlugin();

const store = configureStore();

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
    alternateTextColor: blueGrey50,
    canvasColor: white,
    borderColor: grey400,
    disabledColor: fade(fullBlack, 0.3),
    pickerHeaderColor: lightBlue500,
    clockCircleColor: fade(fullBlack, 0.07),
    shadowColor: fullBlack,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SetupQuiz} />
          <Route path="questions" component={Questions}/>
          <Route path="users" component={Users}/>
        </Route>
      </Router>
      </MuiThemeProvider>
  </Provider>,
document.getElementById('react-root'));
