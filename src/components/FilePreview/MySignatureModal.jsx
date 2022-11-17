import ExSignature from '../../assets/images/ex-signature.png'
import TrashIconY from '../../assets/images/trash-icon-y.svg'
import TrashIconG from '../../assets/images/trash-icon-g.svg'

import AddIcon from '../../assets/images/add-icon.svg'
import { useState } from 'react'

import Background from './Background'

const MySignatureModal = (props) => {
  const { onPanelOpen } = props
  const [makingSign, setMakingSign] = useState(false)

  const SignListPanel = () => {
    return (
      <div className="sign-list-panel">
        <button className="signature-item">
          <img src={ExSignature} alt="" className='px-[24px]' />
          <img src={TrashIconY} alt="" className='border-l border-gray2 py-[8px] px-[24px]' />
        </button>
        <button className="signature-make" onClick={() => setMakingSign(true)}>
          製作簽名
          <img src={AddIcon} alt="" className='m-2' />
        </button>
      </div>
    )
  }

  const SignDrawPanel = () => {
    const [drawOrUpload, setDrawOrUpload] = useState('draw')
    const [colorSelect, setColorSelect] = useState('black')
    const DRAW_COLORS = ['black', 'blue', 'red']
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
          <div className="board relative">
            <button>
              <img src={TrashIconG} alt="" className='absolute w-[16px] bottom-0 right-0 m-[14px]' />
            </button>
          </div >
        </div>
        <div className="flex justify-center">
          {DRAW_COLORS.map(color => {
            return (
              <div
                key={color}
                className={`pen-color pen-color-${color}`}
                onClick={() => setColorSelect(color)}
                data-active={colorSelect === color} />
            )
          })}
        </div>
        <div className="flex justify-between pt-8">
          <button className='btn-w' onClick={() => setMakingSign(false)}>
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

  return (
    <>
      <div className="mx-auto">

        <div className="z-20 m-4" id='my-signature-modal'>
          <h3 className='text-center mb-2'>我的簽名</h3>

          {!makingSign && <SignListPanel />}
          {makingSign && <SignDrawPanel />}

        </div>
        <Background onPanelOpen={onPanelOpen} />
      </div>

    </>

  )
}

export default MySignatureModal
