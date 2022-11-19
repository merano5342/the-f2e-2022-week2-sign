import { createRef, useState } from "react";
import CanvasDraw from "react-canvas-draw";
import TrashIconG from '../../assets/images/trash-icon-g.svg'
import UndoIcon from '../../assets/images/undo-icon.svg'

import classNames from "classnames";
import { useMyContext } from './useContext.jsx'


const defaultProps = {
  loadTimeOffset: 5,
  lazyRadius: 0,
  brushRadius: 2,
  catenaryColor: "black",
  gridColor: "rgba(150,150,150,0.17)",
  hideGrid: true,
  canvasWidth: 300,
  canvasHeight: 190,
  disabled: false,
  imgSrc: "",
  saveData: "",
  immediateLoading: false,
  hideInterface: false,
};

const DRAW_COLORS = ['black', 'blue', 'red']


// const width = `${Math.ceil(colors.length / 2) * 32}px`;

const DrawCanvas = (props) => {
  const { onMakingSign } = props
  const { saveSignData, setSaveSignData } = useMyContext()

  const canvasRef = createRef(null);
  const [brushColor, setBrushColor] = useState('black');
  // const [showColor, setShowColor] = useState(false);
  const [saveSign, setSaveSign] = useState("");
  // const [colorSelect, setColorSelect] = React.useState('black')

  const getImg = () =>
    canvasRef.current.canvasContainer.children[1].toDataURL();

  // const paletteRef = useClickAway(() => {
  //   setShowColor(false);
  // });

  const handleClear = () => {
    canvasRef.current.clear();
    setSaveSign("");
  };

  const handleCanvasChange = () => {
    const saveSign = getImg();
    setSaveSign(saveSign);
  };

  const CVprops = {
    ...defaultProps,
    className: classNames("canvas"),
    onChange: handleCanvasChange,
    ref: canvasRef,
    brushColor,
    catenaryColor: brushColor,
  };

  return (
    <>
      <div className="board ">
        <CanvasDraw {...CVprops} />
      </div>
      <div className="button-container flex justify-between relative mt-5">
        <button>
          <img src={TrashIconG} alt="" className='w-[16px] m-2  left-0 ' onClick={handleClear} />
        </button>
        <div className="flex">
          {DRAW_COLORS.map(color => {
            return (
              <div
                key={color}
                className={`pen-color pen-color-${color}`}
                onClick={() => setBrushColor(color)}
                data-active={brushColor === color} />
            )
          })}
        </div>
        <button>
          <img
            src={UndoIcon}
            alt=""
            className='w-[16px] m-2 right-0'
            onClick={() => {
              canvasRef.current.undo();
            }} />
        </button>
      </div>
      <div className="flex justify-between pt-8">
        <button
          className='btn-w'
          onClick={() => onMakingSign(false)}>
          取消
        </button>
        <button
          className='btn-y'
          data-disable={saveSign}
          onClick={() => {
            setSaveSignData(pre => [...pre, [saveSign]])
            onMakingSign(false)
          }} >
          確認
        </button>
      </div>
    </>

  );
}

export default DrawCanvas