import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'rounded': {
    'borderRadius': '100px'
  },
  'btn:active': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'btn:focus': {
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'ul': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul li': {
    'position': 'relative',
    'display': '-webkit-box',
    'display': '-webkit-flex',
    'display': '-ms-flexbox',
    'display': 'flex',
    'WebkitFlexFlow': 'row wrap',
    'MsFlexFlow': 'row wrap',
    'flexFlow': 'row wrap',
    'WebkitBoxAlign': 'center',
    'WebkitAlignItems': 'center',
    'MsFlexAlign': 'center',
    'alignItems': 'center',
    'padding': [{ 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }, { 'unit': 'rem', 'value': 0.75 }, { 'unit': 'rem', 'value': 1.25 }],
    'marginBottom': [{ 'unit': 'px', 'value': -1 }],
    'backgroundColor': '#fff',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, .125)' }]
  }
});
