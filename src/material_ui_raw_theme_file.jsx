import { fade } from 'material-ui/utils/colorManipulator'
import * as Colors from 'material-ui/styles/colors';
import { spacing, getMuiTheme } from 'material-ui/styles';

const rawBaseTheme = {
  ...spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.amber300,
    primary2Color: Colors.amber400,
    primary3Color: Colors.amber500,
    accent1Color: Colors.brown100,
    accent2Color: Colors.brown200,
    accent3Color: Colors.brown300,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.black,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3)
  }
};

//Theme must be wrapped in funciton getMuiTheme
export default getMuiTheme(rawBaseTheme);
