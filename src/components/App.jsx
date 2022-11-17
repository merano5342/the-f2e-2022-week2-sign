
import Nav from './Nav'
import FirstPage from './FirstPage';
import UploadingPage from './UploadingPage'
import FilePreview from './FilePreview'
import { useState, useRef, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";

const App = () => {
  const [currentPage, setCurrentPage] = useState('FilePreview')

  

  return (
    <div className="app">

      <Nav />
      <div className="container top-[70px]">
        {/* {(currentPage === 'FirstPage') && <FirstPage />} */}
        {(currentPage === 'FilePreview') && <FilePreview />}
        {/* <Canvas /> */}
        {/* <UploadingPage /> */}

      </div>

    </div>
  );
};

export default App;
