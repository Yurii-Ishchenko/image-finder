import { useStyles } from './button-styles';

export default function Button({ type, onClick, height, children }) {
  const classes = useStyles(height);
  return (
    <button type={type} onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}
