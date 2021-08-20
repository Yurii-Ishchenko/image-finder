import { createAction } from '@reduxjs/toolkit';

export const getValueFromForm = createAction('images/getValueFormForm');
export const pageIncrement = createAction('images/pageIncrement');
export const pageDecrement = createAction('images/pageDecrement');
export const clearImages = createAction('images/clearImages');
export const setActiveIdx = createAction('images/getActiveIdx');
export const activeIdxIncrement = createAction('images/activeIdxIncrement');
export const activeIdxDecrement = createAction('images/activeIdxDecrement');
export const showModalAction = createAction('images/showModalAction');
