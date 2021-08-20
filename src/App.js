import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SearchBar from './components/searchBar/SearchBar';
import ImageGallery from './components/imageGallery/ImageGallery';

export default function App() {
  return (
    <>
      <SearchBar />
      <ImageGallery />
      <ToastContainer />
    </>
  );
}
