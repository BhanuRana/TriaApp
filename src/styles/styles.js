import {StyleSheet} from 'react-native';
import Colors from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  primaryBtn: {
    backgroundColor: Colors.primaryBtnBackground,
    width: '100%',
    minHeight: 52,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtnText: {
    color: Colors.primaryBtnText,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 0.36,
  },
  textLinkBtn: {
    backgroundColor: 'transparent',
    width: 'auto',
    minHeight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLinkBtnText: {
    color: Colors.interactive,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: 0.6,
    textDecorationLine: 'underline',
  },
  font16: {
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.64,
  },
  font15Gray: {
    color: Colors.primary,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.64,
  },
});

export default styles;
