import React from "react";
import CanvasDraw from "react-canvas-draw";
// import { GithubPicker } from "react-color";
// import "./styles.css";
import { useClickAway } from "./useClickAway";
import TrashIconG from '../../assets/images/trash-icon-g.svg'
import UndoIcon from '../../assets/images/undo-icon.svg'



import classNames from "classnames";

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

export default function DrawCanvas() {

  const canvasRef = React.createRef(null);
  const [brushColor, setBrushColor] = React.useState('black');
  const [showColor, setShowColor] = React.useState(false);
  const [saveData, setSaveData] = React.useState("");
  // const [colorSelect, setColorSelect] = React.useState('black')

  const getImg = () =>
    canvasRef.current.canvasContainer.children[1].toDataURL();

  const paletteRef = useClickAway(() => {
    setShowColor(false);
  });

  const handleClear = () => {
    canvasRef.current.clear();
    setSaveData("");
  };

  const handleCanvasChange = () => {
    const saveData = getImg();
    setSaveData(saveData);
  };

  const props = {
    ...defaultProps,
    className: classNames("canvas"),
    onChange: handleCanvasChange,
    ref: canvasRef,
    brushColor,
    catenaryColor: brushColor,

  };

  return (
    <div className="board ">
      <CanvasDraw {...props} />
      <div className="button-container">



        <div className="flex justify-center relative">
          <div className="absolute right-0">
            <button>
              <img src={UndoIcon} alt="" className='w-[16px] mr-3' onClick={() => {
                canvasRef.current.undo();
              }} />
            </button>
            <button>
              <img src={TrashIconG} alt="" className='w-[16px]  ' onClick={handleClear} />
            </button>

          </div>

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
        {/* <div className="flex justify-between pt-8">
          <button className='btn-w' onClick={() => onMakingSign(false)}>
            取消
          </button>
          <button
            className='btn-y' data-disable={true} >
            確認
          </button>
        </div> */}

      </div>

    </div>
  );
}
