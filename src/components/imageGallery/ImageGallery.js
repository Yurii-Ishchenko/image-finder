import { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import { fetchimagesOperation } from '../../redux/images/images-operations';
import {
  getImages,
  getValueFromForm,
  getpage,
  getLoading,
  getShowModal,
} from '../../redux/images/images-selectors';
import {
  pageIncrement,
  setActiveIdx,
  showModalAction,
} from '../../redux/images/images-actions';
import ImageGalleryItem from './imageGalleryItem/ImageGalleryItem';
import { useStyles } from './imageGallery-styles';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ImageCarousel from '../imageCarousel/ImageCarousel';

export default function ImageGallery() {
  const classes = useStyles();

  const isShowModal = useSelector(getShowModal);
  const images = useSelector(getImages);
  const searchValue = useSelector(getValueFromForm);
  const page = useSelector(getpage);
  const isLoading = useSelector(getLoading);

  const dispatch = useDispatch();
  const handlePageIncrement = () => {
    dispatch(pageIncrement());
    scroll.scrollToBottom();
  };
  const toggleModal = () => {
    dispatch(showModalAction());
  };

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    dispatch(fetchimagesOperation({ searchValue, page }));
  }, [page, searchValue, dispatch]);

  return (
    <>
      {isLoading && images.length === 0 && (
        <Modal onClose={() => true}>
          <Loader type="Oval" color="#00BFFF" height={250} width={250} />
        </Modal>
      )}
      {images.length > 0 ? (
        <>
          <ul className={classes.gallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }, idx) => (
              <ImageGalleryItem
                key={id}
                imageURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
                onClick={() => {
                  dispatch(setActiveIdx(idx));
                  toggleModal();
                }}
              />
            ))}
          </ul>
          <div className={classes.btnContainer}>
            <Button type="button" heigth="30" onClick={handlePageIncrement}>
              {isLoading ? (
                <div className={classes.isLoadBtn}>
                  <Loader type="Oval" color="#ffffff" height={15} width={15} />
                  <span className={classes.spanBtn}>Loading...</span>
                </div>
              ) : (
                'Load more'
              )}
            </Button>
          </div>
        </>
      ) : (
        <h1 className={classes.title}>Let's find something...</h1>
      )}
      {isShowModal && <ImageCarousel />}
    </>
  );
}
