import Form from '../form/Form';
import { useStyles } from './searchBar-styles';

export default function SearchBar() {
  const classes = useStyles();
  return (
    <header className={classes.searchBar}>
      <Form />
    </header>
  );
}
