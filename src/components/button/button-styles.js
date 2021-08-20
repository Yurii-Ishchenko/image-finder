import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  btn: {
    padding: {
      top: 8,
      bottom: 8,
      left: 16,
      right: 16,
    },
    borderRadius: 5,
    border: '1px solid white',
    backgroundColor: '#3f51b5',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    textAlign: 'center',
    display: 'inlineBlock',
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 500,
    minWidth: 180,
    height: height => height,

    boxShadow: [
      [0, 3, 1, -2, 'rgba(0, 0, 0, 0.2)'],
      [0, 2, 2, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 1, 5, 0, 'rgba(0, 0, 0, 0.12)'],
    ],
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  },
});
