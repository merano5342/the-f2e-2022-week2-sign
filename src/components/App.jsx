import { useState } from 'react';

import Nav from './Nav';
import FirstPage from './FirstPage';
import UploadingPage from './UploadingPage';
import FilePreview from './FilePreview';

import { MyContext } from './unit/useContext';

const App = () => {
  // const [currentPage, setCurrentPage] = useState('FirstPage');
  const [saveSignData, setSaveSignData] = useState([]);
  const [doc, setDoc] = useState('');

  const providerValue = {
    saveSignData,
    setSaveSignData,
    doc,
    setDoc,
  };
  console.log('app', doc);
  return (
    <div className="app">
      <MyContext.Provider value={providerValue}>
        <Nav />
        <div className="container top-[70px]">
          {!doc && <FirstPage />}
          {doc && <FilePreview />}
          {/* <Canvas /> */}
          {/* <UploadingPage /> */}
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default App;
