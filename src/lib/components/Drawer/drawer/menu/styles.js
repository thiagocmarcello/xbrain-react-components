import { darken } from 'material-ui/styles/colorManipulator';

const styles = theme => ({
  list: {
    width: '100%',
  },
  nested: {
    paddingLeft: theme.spacing.unit,
  },
  icon: {
    color: theme.palette.common.minFaintWhite,
  },
  collapseListItemText: {
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.common.minFaintWhite,
  },
  listItemText: {
    color: theme.palette.common.minFaintWhite,
    fontSize: theme.typography.pxToRem(13),
  },
  listItemRoot: {
    paddingLeft: 0,
  },
  dividerDefault: {
    backgroundColor: theme.palette.common.faintWhite,
  },
  collapseInner: {
    backgroundColor: darken(theme.palette.grey[900], 0.3),
  },
  menuListItemGutters: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

export default styles;
