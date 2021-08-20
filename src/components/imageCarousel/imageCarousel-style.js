import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: {
      top: 15,
      bottom: 15,
      left: 'auto',
      right: 'auto',
    },
  },
  stats: {
    position: 'absolute',
    left: 0,
    top: 50,
    color: 'grey',
    margin: 0,
    display: 'inline-flex',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: 'none',
  },
  closeBtn: {
    position: 'absolute',
    right: 20,
    top: 50,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'white',
    borderRadius: '50%',
  },
  btns: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
    width: 80,
    height: 80,
  },
});
