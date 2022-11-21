import { useState } from 'react';

import LogoBtn from '../../assets/images/logo-btn-tool.svg';
import EditIcon from '../../assets/images/edit-icon.svg';
import EmojiIcon from '../../assets/images/emoji-icon.svg';

const ToolBar = (props) => {
  const { onPanelOpen } = props;
  const [toolBarOpen, setToolBarOpen] = useState(false);
  return (
    <div className="tool-bar fixed right-6 top-[50vh]">
      <div
        className="absolute top-[-120px] right-1 hidden w-[56px] flex-col items-center rounded-full bg-gray2 data-[active=true]:flex"
        data-active={toolBarOpen}
      >
        <button
          className="m-1 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-black shadow-md"
          onClick={() => onPanelOpen((pre) => !pre)}
        >
          <img src={EditIcon} alt="" className="h-[17px]" />
        </button>
        <button className="m-1 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white shadow-md">
          <img src={EmojiIcon} alt="" className="h-[19px]" />
        </button>
      </div>

      <button>
        <img
          src={LogoBtn}
          alt=""
          className="relative h-[62px]"
          onClick={() => setToolBarOpen((pre) => !pre)}
        />
      </button>
    </div>
  );
};

export default ToolBar;
