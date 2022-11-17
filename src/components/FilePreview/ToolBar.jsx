import { useState } from 'react'

import LogoBtn from '../../assets/images/logo-btn-tool.svg'
import EditIcon from '../../assets/images/edit-icon.svg'
import EmojiIcon from '../../assets/images/emoji-icon.svg'

const ToolBar = (props) => {
  const { onPanelOpen } = props
  const [toolBarOpen, setToolBarOpen] = useState(false)
  return (
    <div className="tool-bar fixed right-6 top-[50vh]">
      <div className="flex-col items-center bg-gray2 w-[56px] rounded-full absolute top-[-120px] right-1 hidden data-[active=true]:flex"
        data-active={toolBarOpen}>
        <button className='bg-black rounded-full h-[48px] w-[48px] flex justify-center items-center shadow-md m-1'
          onClick={() => onPanelOpen(pre => !pre)}>
          <img src={EditIcon} alt="" className='h-[17px]' />
        </button>
        <button className='bg-white rounded-full h-[48px] w-[48px] flex justify-center items-center shadow-md m-1'>
          <img src={EmojiIcon} alt="" className='h-[19px]' />
        </button>
      </div>

      <button>
        <img src={LogoBtn} alt="" className='h-[62px] relative' onClick={() => setToolBarOpen(pre => !pre)} />
      </button>

    </div>
  )
}

export default ToolBar;