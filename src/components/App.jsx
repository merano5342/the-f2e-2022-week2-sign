
import Nav from './Nav'
import FirstPage from './FirstPage';
import UploadingPage from './UploadingPage'
import FilePreview from './FilePreview'
import { useState, useRef, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";

import { MyContext } from './unit/useContext.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('FilePreview')
  const [saveSignData, setSaveSignData] = useState([]);

  const providerValue = {
    saveSignData,
    setSaveSignData
  }


  return (
    <div className="app">
      <MyContext.Provider value={providerValue}>

        <Nav />
        <div className="container top-[70px]">
          {/* {(currentPage === 'FirstPage') && <FirstPage />} */}
          {(currentPage === 'FilePreview') && <FilePreview />}
          {/* <Canvas /> */}
          {/* <UploadingPage /> */}

        </div>
      </MyContext.Provider>

    </div>
  );
};

export default App;
