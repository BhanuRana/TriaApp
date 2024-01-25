import {StyleSheet} from 'react-native';
import Colors from './colors';

export const PRIMARY_FONT_REGULAR = 'NeueHaasDisplayRoman'; // 400
export const PRIMARY_FONT_MEDIUM = 'NeueHaasDisplayMedium'; // 500
export const PRIMARY_FONT_BOLD = 'NeueHaasDisplayBold'; // 600

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
    fontFamily: PRIMARY_FONT_MEDIUM,
    fontWeight: '600',
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
    fontFamily: PRIMARY_FONT_REGULAR,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0.6,
    textDecorationLine: 'underline',
  },
  font32: {
    color: Colors.primary,
    fontSize: 32,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 38,
    fontWeight: '500',
    letterSpacing: 0.64,
  },
  font16: {
    color: Colors.primary,
    fontSize: 16,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 20,
    letterSpacing: 0.64,
  },
  font15Gray: {
    color: Colors.primary,
    fontSize: 15,
    fontFamily: PRIMARY_FONT_REGULAR,
    lineHeight: 20,
    fontWeight: '400',
    letterSpacing: 0.64,
  },
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 15,
    padding: 5,
    zIndex: 1000,
  },
});

export default styles;
