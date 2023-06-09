import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.OVERLAY,

  },
  content: {
    width:  311,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',

  },

  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,
  },

  label: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
  },

  discordButton: {
    width: 231,
    height: 48,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    borderRadius: 6,
  },
  
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});