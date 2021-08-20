import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '../button/Button';
import { useStyles } from './form-styles';
import {
  getValueFromForm,
  pageDecrement,
  clearImages,
} from '../../redux/images/images-actions';

export default function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  const handeFormSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('enter something');
      return;
    }
    dispatch(getValueFromForm(value));
    dispatch(pageDecrement());
    dispatch(clearImages());
    setValue('');
  };

  return (
    <form className={classes.form} onSubmit={handeFormSubmit}>
      <input
        onChange={handleInputChange}
        className={classes.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
