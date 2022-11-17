import BackIcon from '../../assets/images/back-icon.svg'


import ToolBar from './ToolBar'

import MySignature from './MySignatureModal'
import { useState } from 'react'

const FilePreview = () => {

  const [panelOpen, setPanelOpen] = useState(false)

  return (
    <div className="file-preview">


      <div className="fixed flex justify-center items-center bg-white h-[64px]  w-full">
        <button>
          <img src={BackIcon} alt="BackIcon" className='h-4 absolute top-6 left-[30px]' />
        </button>
        <h4>檔案名稱.pdf</h4>
      </div>

      <ToolBar onPanelOpen={setPanelOpen} />
      {panelOpen && <MySignature onPanelOpen={setPanelOpen} />}

      <div className="pt-[80px] h-[100vh] bg-gray1 p-6">
        <h5 className='text-center'>共 87 頁，第 8 頁</h5>
        <div className="fake-paper h-[420px] w-[300px] bg-gray3 mx-auto my-2">
          <p className='text-center'>pdf</p>
        </div>
        <div className="fake-paper h-[420px] w-[300px] bg-gray3 mx-auto my-2">
          <p className='text-center'>pdf</p>
        </div>  <div className="fake-paper h-[420px] w-[300px] bg-gray3 mx-auto my-2">
          <p className='text-center'>pdf</p>
        </div>  <div className="fake-paper h-[420px] w-[300px] bg-gray3 mx-auto my-2">
          <p className='text-center'>pdf</p>
        </div>
      </div>
    </div>
  )
}

export default FilePreview;
