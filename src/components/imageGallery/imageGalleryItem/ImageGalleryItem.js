import { useStyles } from './imageGalleryItem-styles';

export default function ImageGalleryItem({ imageURL, tags, onClick }) {
  const classes = useStyles();

  return (
    <li className={classes.galleryItem} onClick={onClick}>
      <img src={imageURL} alt={tags} className={classes.image} />
    </li>
  );
}
