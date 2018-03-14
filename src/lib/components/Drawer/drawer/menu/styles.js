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
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.common.minFaintWhite,
  },
  listItemText: {
    color: theme.palette.common.minFaintWhite,
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
    backgroundColor: '#19212b',
  },
  menuListItemGutters: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

export default styles;
