import { useState } from "react"
import Canvas from '../../unit/Canvas'
import CanvasDraw from "react-canvas-draw";
import DrawCanvas from '../../unit/DrawCanvas'



const SignDrawPanel = (props) => {
  const { onMakingSign } = props
  const [drawOrUpload, setDrawOrUpload] = useState('draw')
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
            data-active={drawOrUpload === 'upload'}>
            上傳簽名
          </button>
        </div>
        <div className="">
          {/* <Canvas /> */}
          {/* <CanvasDraw /> */}
          <DrawCanvas />

        </div >
      </div>
      <div className="flex justify-center">
        {/* {DRAW_COLORS.map(color => {
          return (
            <div
              key={color}
              className={`pen-color pen-color-${color}`}
              onClick={() => setColorSelect(color)}
              data-active={colorSelect === color} />
          )
        })} */}
      </div>
      <div className="flex justify-between pt-8">
        <button className='btn-w' onClick={() => onMakingSign(false)}>
          取消
        </button>
        <button
          className='btn-y' data-disable={true} >
          確認
        </button>
      </div>
    </div >

  )
}

export default SignDrawPanel