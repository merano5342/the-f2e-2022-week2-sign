import { useState } from 'react';
import { useMyContext } from 'components/unit/useContext';
import BackIcon from '../../assets/images/back-icon.svg';
import ToolBar from './ToolBar';
import MySignature from './MySignatureModal';

const FilePreview = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const { doc, setDoc } = useMyContext();
  // const docs = { doc... }
  console.log('FilePreview', doc);
  return (
    <div className="file-preview">
      <div className="fixed flex h-[64px] w-full items-center justify-center  bg-white">
        <button>
          <img
            src={BackIcon}
            alt="BackIcon"
            className="absolute top-6 left-[30px] h-4"
            onClick={() => setDoc('')}
          />
        </button>
        <h4>檔案名稱.pdf</h4>
      </div>

      <ToolBar onPanelOpen={setPanelOpen} />
      {panelOpen && <MySignature onPanelOpen={setPanelOpen} />}

      <div className="h-[100vh] bg-gray1 p-6 pt-[80px]">
        <h5 className="text-center">共 87 頁，第 8 頁</h5>
        {doc.map((x) => {
          return <img src={x.data_url} alt="" className="h-[100px" />;
        })}
        {/* <div className="fake-paper mx-auto my-2 h-[420px] w-[300px] bg-gray3">
          <p className="text-center">pdf</p>
        </div>
        <div className="fake-paper mx-auto my-2 h-[420px] w-[300px] bg-gray3">
          <p className="text-center">pdf</p>
        </div>{' '}
        <div className="fake-paper mx-auto my-2 h-[420px] w-[300px] bg-gray3">
          <p className="text-center">pdf</p>
        </div>{' '}
        <div className="fake-paper mx-auto my-2 h-[420px] w-[300px] bg-gray3">
          <p className="text-center">pdf</p>
        </div> */}
      </div>
    </div>
  );
};

export default FilePreview;
