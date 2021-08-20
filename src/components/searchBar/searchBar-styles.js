import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  searchBar: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '64',
    paddingRight: '24',
    paddingLeft: '24',
    paddingTop: 12,
    paddingBottom: 12,
    color: 'white',
    backgroundColor: '#3f51b5',
    boxShadow: [
      [0, 2, 4, -1, 'rgba(0, 0, 0, 0.2)'],
      [0, 4, 5, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 1, 10, 0, 'rgba(0, 0, 0, 0.12)'],
    ],
  },
});
