import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchimagesOperation } from './images-operations';
import {
  getValueFromForm,
  pageIncrement,
  pageDecrement,
  clearImages,
  setActiveIdx,
  activeIdxIncrement,
  activeIdxDecrement,
  showModalAction,
} from './images-actions';

const imageReducer = createReducer([], {
  [fetchimagesOperation.fulfilled]: (state, action) => {
    return [...state, ...action.payload.hits];
  },
  [clearImages]: () => [],
});

const getValueFormFormReducer = createReducer('', {
  [getValueFromForm]: (_, action) => action.payload,
});

const pageIncrementReducer = createReducer(1, {
  [pageIncrement]: state => state + 1,
  [pageDecrement]: () => 1,
});

const loadingReducer = createReducer(false, {
  [fetchimagesOperation.pending]: () => true,
  [fetchimagesOperation.fulfilled]: () => false,
  [fetchimagesOperation.rejected]: () => false,
});

const getActiveIdxReducer = createReducer(0, {
  [setActiveIdx]: (_, action) => action.payload,
  [activeIdxIncrement]: state => state + 1,
  [activeIdxDecrement]: state => state - 1,
});

const showModalReducer = createReducer(false, {
  [showModalAction]: state => !state,
});
export default combineReducers({
  images: imageReducer,
  searchValue: getValueFormFormReducer,
  page: pageIncrementReducer,
  loading: loadingReducer,
  activeIdx: getActiveIdxReducer,
  showModal: showModalReducer,
});
