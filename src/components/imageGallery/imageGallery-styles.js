import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  title: {
    textAlign: 'center',
  },
  gallery: {
    margin: {
      top: 15,
      bottom: 15,
      left: 'auto',
      right: 'auto',
    },
    display: 'grid',
    maxWidth: 'calc(100vw - 48px)',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gridGap: 16,
    padding: 0,
    listStyle: 'none',
  },
  btnContainer: {
    textAlign: 'center',
  },
  isLoadBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spanBtn: { marginLeft: 10 },
});
