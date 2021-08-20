import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    backgroundColor: 'white',
    borderRadius: 3,
    overflow: 'hidden',
  },
  input: {
    display: 'inlineBlock',
    width: '100%',
    font: 'inherit',
    fontSize: 20,
    border: 'none',
    outline: 'none',
    paddingLeft: 4,
    paddingRight: 4,
  },
});
