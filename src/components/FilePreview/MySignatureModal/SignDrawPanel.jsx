import { useState } from 'react';
import DrawCanvas from '../../unit/DrawCanvas';

const SignDrawPanel = (props) => {
  const { onMakingSign } = props;

  const [drawOrUpload, setDrawOrUpload] = useState('draw');
  return (
    <div className="sign-draw-panel">
      <div className="draw-board my-2">
        <div className="">
          <button
            className="tab"
            onClick={() => setDrawOrUpload('draw')}
            data-active={drawOrUpload === 'draw'}
          >
            繪製簽名
          </button>
          <button
            className="tab"
            onClick={() => setDrawOrUpload('upload')}
            data-active={drawOrUpload === 'upload'}
          >
            上傳簽名
          </button>
        </div>
        <div className="">
          <DrawCanvas onMakingSign={onMakingSign} />
        </div>
      </div>
      <div className="flex justify-center" />
    </div>
  );
};

export default SignDrawPanel;
