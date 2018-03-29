import { darken } from 'material-ui/styles/colorManipulator';

const styles = theme => ({
  list: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing.unit,
    '&:hover': {
      background: darken(theme.palette.grey[500], 0.76),
    },
  },
  icon: {
    color: theme.palette.grey[100],
  },
  iconActive: {
    color: theme.palette.primary.main,
  },
  collapseListItemText: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightLight,
  },
  collapseListItemTextInactive: {
    color: theme.palette.grey[100],
  },
  collapseListItemTextActive: {
    color: theme.palette.primary.main,
  },
  listItemText: {
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.grey[200],
    fontSize: theme.typography.pxToRem(13),
  },
  listItemRoot: {
    paddingLeft: 0,
  },
  listItemInset: {
    '&:first-child': {
      paddingLeft: theme.spacing.unit * 2,
    },
  },
  dividerDefault: {
    backgroundColor: theme.palette.common.faintWhite,
  },
  collapseInner: {
    background: darken(theme.palette.grey[500], 0.7),
  },
  menuListItemGutters: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
  menuListItemRoot: {
    borderLeft: '3px solid transparent',
    '&:hover': {
      background: darken(theme.palette.grey[500], 0.56),
    },
  },
  menuActive: {
    borderLeft: `3px solid ${theme.palette.primary.main}`,
  },
});

export default styles;
