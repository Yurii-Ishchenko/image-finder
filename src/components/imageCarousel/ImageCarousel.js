import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Modal from '../modal/Modal';

import { useStyles } from './imageCarousel-style';
import { useSelector, useDispatch } from 'react-redux';
import { getImages, getActiveIndex } from '../../redux/images/images-selectors';
import {
  showModalAction,
  setActiveIdx,
  activeIdxIncrement,
  activeIdxDecrement,
} from '../../redux/images/images-actions';

export default function ImageCarousel() {
  const classes = useStyles();
  const activeIdx = useSelector(getActiveIndex);
  const images = useSelector(getImages);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(showModalAction());
  };
  const activeIndexIncrement = () => {
    if (activeIdx + 1 === images.length) {
      return dispatch(setActiveIdx(0));
    }
    return dispatch(activeIdxIncrement());
  };
  const activeIndexDecrement = () => {
    if (activeIdx + 1 === 1) {
      return dispatch(setActiveIdx(images.length - 1));
    }
    return dispatch(activeIdxDecrement());
  };
  return (
    <Modal onClose={toggleModal}>
      <div className={classes.container}>
        <IconContext.Provider value={{ className: classes.btns }}>
          <p className={classes.stats}>
            {activeIdx + 1} from {images.length}
          </p>

          <button onClick={activeIndexDecrement} className={classes.btn}>
            <AiFillCaretLeft />
          </button>

          <img
            src={images[activeIdx].largeImageURL}
            alt={images[activeIdx].tags}
            width="800"
          />
          <button onClick={activeIndexIncrement} className={classes.btn}>
            <AiFillCaretRight />
          </button>
        </IconContext.Provider>
      </div>
    </Modal>
  );
}
