import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
  galleryItem: {
    borderRadius: 2,
    boxShadow: [
      [0, 1, 3, 0, 'rgba(0, 0, 0, 0.2)'],
      [0, 1, 1, 0, 'rgba(0, 0, 0, 0.14)'],
      [0, 2, 1, -1, 'rgba(0, 0, 0, 0.12)'],
    ],
  },

  image: {
    width: '100%',
    height: 260,
    objectFit: 'cover',
    transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'scale(1.03)',
      // cursor: 'zoom-in',
    },
  },
});
