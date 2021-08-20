import { useStyles } from './modal-styles';

export default function Modal({ children, onClose }) {
  const classes = useStyles();
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={classes.overlay} onClick={handleOverlayClick}>
      <div className={classes.modal}>{children}</div>
    </div>
  );
}
